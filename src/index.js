const app = require('./app')
const config = require('./config/index')

app.listen(config.port, ()=>{
    console.log(`server started at ${config.port}`)
})