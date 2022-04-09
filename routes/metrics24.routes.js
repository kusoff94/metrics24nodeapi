const Router = require('express')
const router = new Router()
const metrics24controller = require('../controller/metrics24.controller')
const metrics24Chartcontroller = require('../controller/mertics24.chart.controller')

router.get('/all',metrics24controller.getDataa)
router.get('/chart1',metrics24Chartcontroller.getDataChart1)
router.get('/chart2',metrics24Chartcontroller.getDataChart2)
router.get('/chart3',metrics24Chartcontroller.getDataChart3)
router.get('/chart4',metrics24Chartcontroller.getDataChart4)

module.exports = router