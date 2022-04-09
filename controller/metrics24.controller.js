const db = require('../db')

class Metrics24 {
    async getDataa(req,res,next) {
        const strim = req.query.strim
        const sprint = req.query.sprint
        const data = await db.query(`select * from public.metric24_ where strim = \'${strim}\' and supersprint = \'${sprint}\' order by cast(metricnum as numeric)`)
        res.json(data.rows)
    }
}


module.exports = new Metrics24()