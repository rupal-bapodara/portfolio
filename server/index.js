const path = require('path')
const dotenv = require('dotenv')
// load server/.env first; fall back to parent project .env if needed
dotenv.config()
if (!process.env.DB_HOST) {
    dotenv.config({ path: path.resolve(__dirname, '../.env') })
}

const express = require('express')
const cors = require('cors')
const geoip = require('geoip-lite')
const mysql = require('mysql2/promise')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'portfolio',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

console.log(`DB connection: ${process.env.DB_USER || 'root'}@${process.env.DB_HOST || '127.0.0.1'}/${process.env.DB_NAME || 'portfolio'}`)

function getClientIp(req) {
    const xf = req.headers['x-forwarded-for']
    const ip = xf ? xf.split(',')[0].trim() : req.socket.remoteAddress
    // remove IPv6 prefix if present
    return ip && ip.startsWith('::ffff:') ? ip.split('::ffff:')[1] : ip
}

app.post('/api/track-view', async (req, res) => {
    const ip = getClientIp(req) || ''
    const path = (req.body && req.body.path) || req.path || '/'
    const userAgent = (req.body && req.body.userAgent) || req.headers['user-agent'] || ''

    const geo = geoip.lookup(ip) || {}
    const country = geo.country || null
    const region = geo.region || null
    const city = geo.city || null
    const ll = geo.ll || []
    const latitude = ll[0] || null
    const longitude = ll[1] || null

    try {
        const conn = await pool.getConnection()
        try {
            // Check for an existing view from this IP for the same path within last 24 hours
            const [rows] = await conn.execute(
                'SELECT id FROM visits WHERE ip = ? AND path = ? AND created_at >= (NOW() - INTERVAL 1 DAY) LIMIT 1',
                [ip, path]
            )

            if (!rows.length) {
                await conn.execute(
                    `INSERT INTO visits (ip, country, region, city, latitude, longitude, user_agent, path)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                    [ip, country, region, city, latitude, longitude, userAgent, path]
                )
            }

            const [countRows] = await conn.execute(
                'SELECT COUNT(DISTINCT ip) AS uniqueCount FROM visits WHERE path = ?',
                [path]
            )

            const uniqueCount = (countRows[0] && countRows[0].uniqueCount) || 0

            res.json({ success: true, uniqueCount })
        } finally {
            conn.release()
        }
    } catch (err) {
        console.error('track-view error', err)
        res.status(500).json({ success: false })
    }
})

app.get('/api/unique-count', async (req, res) => {
    const path = req.query.path || '/'
    try {
        const [rows] = await pool.execute('SELECT COUNT(DISTINCT ip) AS uniqueCount FROM visits WHERE path = ?', [path])
        res.json({ uniqueCount: rows[0].uniqueCount || 0 })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false })
    }
})

app.listen(PORT, () => console.log(`Tracker listening on http://localhost:${PORT}`))
