const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'mysecretpassword',
  database: process.env.DB_NAME || 'mydatabase',
});

pool.connect()
  .then(() => console.log('Connected to the database!'))
  .catch(err => console.error('Database connection error:', err.stack));

module.exports = pool;
