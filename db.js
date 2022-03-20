const { port } = require('pg/lib/defaults')

const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    password:"4752315Qz!",
    host:"localhost",
    port:"5432",
    database:"demo"
})

module.exports = pool