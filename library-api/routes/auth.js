const Router = require('restify-router').Router;
const router = new Router();
const jwt = require('jsonwebtoken')
const db = require('../database')

function generateAccessToken(id) {
    return jwt.sign( id, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
}

router.post("/signup", function(req, res) {
    db.User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then( user => {
            const token = {'accesstoken': generateAccessToken({id: user.id})}
            res.send(200, JSON.stringify(token))
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.post("/signin", function(req, res) {
    db.User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
        
        .then( user => {
            const token = {'accesstoken': generateAccessToken({id: user.id})}
            res.send(200, JSON.stringify(token))
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

module.exports = router