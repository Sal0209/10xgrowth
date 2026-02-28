const { Client } = require('pg');
require('dotenv').config();

async function main() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    const res = await client.query(`
    SELECT table_name, column_name, data_type, column_default 
    FROM information_schema.columns 
    WHERE table_schema = 'public'
    ORDER BY table_name, ordinal_position;
  `);

    const tables = {};
    for (const row of res.rows) {
        if (!tables[row.table_name]) {
            tables[row.table_name] = [];
        }
        tables[row.table_name].push(row);
    }

    console.log(JSON.stringify(tables, null, 2));
    await client.end();
}

main().catch(console.error);
