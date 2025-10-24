require('dotenv').config();

const {Client} = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username TEXT,
text TEXT,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO messages(username, text)
VALUES 
('Marion','hey there'),
('norman bates','whats up');

`

async function main(){
    console.log('seeding..')
    const client = new Client({
        connectionString:process.env.DB_URL
    })

    await client.connect();
    await client.query(SQL)
    await client.end()

    console.log('done')
}

main()