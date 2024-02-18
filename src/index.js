const app = require('./app')

let server 
const port = 5000
server = app.listen(port, ()=>{
    console.log('server started at 5000')
})