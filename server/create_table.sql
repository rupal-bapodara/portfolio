-- MySQL table for storing unique visits (run in your database)
CREATE TABLE IF NOT EXISTS visits (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  ip VARCHAR(45) NOT NULL,
  country VARCHAR(64) DEFAULT NULL,
  region VARCHAR(64) DEFAULT NULL,
  city VARCHAR(64) DEFAULT NULL,
  latitude DECIMAL(10,7) DEFAULT NULL,
  longitude DECIMAL(10,7) DEFAULT NULL,
  user_agent VARCHAR(512) DEFAULT NULL,
  path VARCHAR(255) DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_path (path),
  INDEX idx_ip_created (ip, created_at)
);
