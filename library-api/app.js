const express = require('express')
const app = express()
let router = express.Router()
const fs = require('fs');
const port = 5000
const path = 'logger.txt'

app.use(function(request, response, next){
    var data = `Time: ${new Date().toLocaleString()}; URL : ${request.url}\n`
  
    fs.appendFile(path, data, function(err){
        console.log(data)
    })
    next()
})
  

router.route("/")
    .get(function(req, res) { 
        console.log('view')
        res.append('Content-Type', 'text/html; charset=utf-8')
        res.append('Content-Language', 'en-CA')
        res.append('Cache-Control', 'no-cache')
        res.cookie('some cookie', 'this is some cookie')
        res.clearCookie('anotherCookie')
        res.send('Hello World!')
    }).post(function(req, res) {
        res.send("POST method")
    })

app.use('/library', router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
