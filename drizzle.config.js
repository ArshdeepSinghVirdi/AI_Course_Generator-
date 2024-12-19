require('dotenv').config({ path: './.env.local' });
const { defineConfig } = require('drizzle-kit');
/**@type {import("drizzle-kit").Config } */

module.exports = defineConfig({
  schema: './configs/schema.jsx', 
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
  },
});

//console.log('Database URL:', process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);

