const { text } = require('express')
const db = require('../db')

class Metrics24chart {
    async getDataChart1(req,res,next) {
        const strim = req.query.strim
        const sprint = req.query.sprint
        const data = await db.query({
            text:`select sprint,value from public.metrics24chart where strim = \'${strim}\' and supersprint = \'${sprint}\' order by sprint`,
            rowMode:'json',
        })
        const ret = data.rows
        // console.log(ret.forEach(row => row[0]))
        // res.json(ret.forEach(row => row[0]))
        // res.json(ret)
        let values_array = []
        let labels_arrat = []
        ret.forEach(row => {
            values_array.push(row.value)
            labels_arrat.push(row.sprint)
    })
    res.json({values:values_array,labels:labels_arrat,data:data.rows})
}
    async getDataChart2(req,res,next) {
        const strim = req.query.strim
        const sprint = req.query.sprint
        const data = await db.query({
            text:`select sprint,value from public.metrics24chart2 where strim = \'${strim}\' and supersprint = \'${sprint}\' order by sprint`,
            rowMode:'json',
        })
        const ret = data.rows
        // console.log(ret.forEach(row => row[0]))
        // res.json(ret.forEach(row => row[0]))
        // res.json(ret)
        let values_array = []
        let labels_arrat = []
        ret.forEach(row => {
            values_array.push(row.value)
            labels_arrat.push(row.sprint)
    })
    res.json({values:values_array,labels:labels_arrat,data:data.rows})
}  

async getDataChart3(req,res,next) {
    const strim = req.query.strim
    const sprint = req.query.sprint
    const data = await db.query({
        text:`select sprint,value from public.metrics24chart3 where strim = \'${strim}\' and supersprint = \'${sprint}\' order by sprint`,
        rowMode:'json',
    })
    const ret = data.rows
    // console.log(ret.forEach(row => row[0]))
    // res.json(ret.forEach(row => row[0]))
    // res.json(ret)
    let values_array = []
    let labels_arrat = []
    ret.forEach(row => {
        values_array.push(row.value)
        labels_arrat.push(row.sprint)
})
res.json({values:values_array,labels:labels_arrat,data:data.rows})
} 

async getDataChart4(req,res,next) {
    const strim = req.query.strim
    const sprint = req.query.sprint
    const data = await db.query({
        text:`select sprint,value from public.metrics24chart4 where strim = \'${strim}\' and supersprint = \'${sprint}\' order by sprint`,
        rowMode:'json',
    })
    const ret = data.rows
    // console.log(ret.forEach(row => row[0]))
    // res.json(ret.forEach(row => row[0]))
    // res.json(ret)
    let values_array = []
    let labels_arrat = []
    ret.forEach(row => {
        values_array.push(row.value)
        labels_arrat.push(row.sprint)
})
res.json({values:values_array,labels:labels_arrat,data:data.rows})
} 
}

module.exports = new Metrics24chart()

