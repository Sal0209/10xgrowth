const fs = require('fs');
const { Client } = require('pg');

const envContent = fs.readFileSync('.env', 'utf8');
const dbUrlMatch = envContent.match(/DATABASE_URL=["']?([^"'\n\r]+)["']?/);
const dbUrl = dbUrlMatch ? dbUrlMatch[1] : null;

if (!dbUrl) {
    console.error("Could not find DATABASE_URL in .env");
    process.exit(1);
}

async function main() {
    const client = new Client({ connectionString: dbUrl });
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

    fs.writeFileSync('db-schema-utf8.json', JSON.stringify(tables, null, 2), 'utf8');
    console.log("Schema dumped to db-schema-utf8.json");
    await client.end();
}

main().catch(console.error);
