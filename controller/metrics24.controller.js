const db = require('../db')

class Metrics24 {
    async getData(req,res) {
        const data = await db.query(`SELECT * FROM getdata('2022.1','IT4IT');`)
        res.json(data.rows)
    }
}


module.exports = new Metrics24()