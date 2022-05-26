const restify = require('restify')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const server = restify.createServer({
  name: 'myApp'
});
const port = 5000
const path = 'logger.txt'
const fs = require('fs')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const directorRouter = require('./routes/director')
const bookRouter = require('./routes/book')
const genreRouter = require('./routes/genre')


dotenv.config()

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.send(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.send(403)

    req.user = user

    return next()
  })
}

var unless = function(middleware, ...paths) {
  return function(req, res, next) {
    const pathCheck = paths.some(path => path === req.path())
    pathCheck ? next() : middleware(req, res, next)
  }
}

server.use(unless(authenticateToken, "/signin", "/signup"))

server.use(function(request, response, next){
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var data = `Time: ${new Date().toLocaleString()}; URL : ${request.url}\n`

  fs.appendFile(path, data, function(err){
    console.log(data)
  })

  return next()
})
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({ mapParams: true }))
authRouter.applyRoutes(server)
userRouter.applyRoutes(server, '/users')
directorRouter.applyRoutes(server, '/directors')
bookRouter.applyRoutes(server, '/books')
genreRouter.applyRoutes(server, '/genres')

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})