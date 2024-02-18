const express = require('express')
const mainRoute = require('./../routes/index-routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(mainRoute)

module.exports = app