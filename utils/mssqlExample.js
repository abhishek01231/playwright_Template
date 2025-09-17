// MSSQL connection example (do NOT execute in CI; this file is a commented example)
// Install the driver if you want to run locally: npm install mssql
// This file shows a minimal pattern to connect, query, and close a connection.

/*
import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASS || '',
  server: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 1433),
  database: process.env.DB_NAME || 'master',
  options: {
    encrypt: false, // change based on your SQL Server config
    enableArithAbort: true,
  },
  pool: {
    max: 5,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

// Example function (commented out to avoid accidental execution)
// export async function querySample() {
//   let pool;
//   try {
//     pool = await sql.connect(config);
//     const result = await pool.request()
//       .input('id', sql.Int, 1)
//       .query('SELECT TOP (10) * FROM YourTable WHERE Id = @id');
//     console.log('rows:', result.recordset.length);
//     return result.recordset;
//   } catch (err) {
//     console.error('MSSQL error', err);
//     throw err;
//   } finally {
//     if (pool) await pool.close();
//   }
// }

// Notes:
// - Keep credentials out of source control. Use environment variables or a secrets manager.
// - For CI, prefer a mock or a test database behind the CI network.
// - To run locally, uncomment code, install `mssql` and call querySample() from a safe script.

*/

export default {};
