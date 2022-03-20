const Router = require('express')
const router = new Router()
const metrics24controller = require('../controller/metrics24.controller')

router.get('/all',metrics24controller.getData)

module.exports = router