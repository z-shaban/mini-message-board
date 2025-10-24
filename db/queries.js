const pool = require('./pool')

async function getAllmessages(){
    const {rows} = await pool.query('SELECT * FROM messages')
    console.log(rows)
    return rows;
}

async function insertMessage(message){
    await pool.query('INSERT INTO messages(username, text) VALUES ($1 ,$2)', [message.name, message.message])
}

async function openMessage(id){
   const {rows} = await pool.query('SELECT * FROM messages WHERE id = $1', [id])
   return rows[0]
}

module.exports = {
    getAllmessages,
    insertMessage,
    openMessage
}