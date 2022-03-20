const db = require('../db')

class Metrics24 {
    async getData(req,res,next) {
        const strim = req.query.strim
        const sprint = req.query.sprint
        const data = await db.query(`select * from public.metric24_ where strim = \'${strim}\' and supersprint = \'${sprint}\'`)
        res.json(data.rows)
        // res.json(`select * from public.metric24_ where strim = \'${strim}\' and supersprint = \'${sprint}\'`)
    }
}


module.exports = new Metrics24()