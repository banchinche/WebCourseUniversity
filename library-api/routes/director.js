const Router = require('restify-router').Router;
const router = new Router();
const db = require('../database')

router.get("/", function(req, res) {
    db.Director.findAll()
        .then( directors => {
            res.send(200, JSON.stringify(directors));
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.get("/:id", function(req, res) {
    db.Director.findByPk(req.params.id)
        .then( director => {
            res.send(200, JSON.stringify(director));
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.post("/", function(req, res) {
    db.Director.create({
        name: req.body.name
    })
        .then( director => {
            res.send(200, JSON.stringify(director));
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.put("/:id", function(req, res) {
    db.Director.update({
        name: req.body.name
    }, 
    {
        where: {
          id: req.params.id
        }
    })
        .then( director => {
            res.send(200, JSON.stringify(director));
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.del("/:id", function(req, res) {
    db.Director.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.send(204);
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

module.exports = router