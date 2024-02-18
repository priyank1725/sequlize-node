const express = require('express')
const authRoute = require('./auth.routes')
const router = express.Router()

router.use('/v1',authRoute)


module.exports = router