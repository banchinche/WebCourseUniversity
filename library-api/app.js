const express = require('express')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const app = express()
const port = 5000
const path = 'logger.txt'
const fs = require('fs')
const userRouter = require('./routes/user')
const directorRouter = require('./routes/director')
const bookRouter = require('./routes/book')
const genreRouter = require('./routes/genre')
const authRouter = require('./routes/auth')

dotenv.config()

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

var unless = function(middleware, ...paths) {
  return function(req, res, next) {
    const pathCheck = paths.some(path => path === req.path)
    pathCheck ? next() : middleware(req, res, next)
  }
}

app.use(unless(authenticateToken, "/signin", "/signup"))

app.use(function(request, response, next){
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var data = `Time: ${new Date().toLocaleString()}; URL : ${request.url}\n`

  fs.appendFile(path, data, function(err){
    console.log(data)
  })

  next()
})

app.use(express.json())
app.use('/users', userRouter)
app.use('/directors', directorRouter)
app.use('/books', bookRouter)
app.use('/genres', genreRouter)
app.use('/', authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
