# Portfolio View Tracker

Small Express service to record unique portfolio views (IP + geo details). Unique per IP per 24 hours.

Setup

1. Install dependencies

```bash
cd server
npm install
```

2. Create the `visits` table in your MySQL database

```sql
-- run the SQL in server/create_table.sql against your MySQL server
SOURCE /path/to/server/create_table.sql;
```

3. Copy `.env.example` to `.env` and set DB credentials.

4. Start the service

```bash
npm start
```

The frontend will POST to `/api/track-view` (same origin). If you host the tracker separately, point the frontend fetch to the tracker URL or configure a reverse proxy.
