const express = require('express')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const db = require('./database');
const userRouter = require('./routes/user')
const app = express();
const fs = require('fs');
const port = 5000
const path = 'logger.txt'
const secretValue = 'secret'

app.use(expressSession({
  resave : false,
  saveUninitialized : false,
  secret: secretValue
}))


app.use(function(request, response, next){
    var data = `Time: ${new Date().toLocaleString()}; URL : ${request.url}\n`
  
    fs.appendFile(path, data, function(err){
        console.log(data)
    })

    if(!request.session.flag){
      request.session.userName = 'userName'
      request.session.flag = true
    }       

    console.log(request.session.userName)
  
    next()
})

app.use(cookieParser())
app.use(express.json())
app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
