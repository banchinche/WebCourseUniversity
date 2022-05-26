const Router = require('restify-router').Router;
const router = new Router();
const db = require('../database')

router.get("/", function(req, res) {
    db.Genre.findAll()
        .then( genres => {
            res.send(200, JSON.stringify(genres));
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.get("/:id", function(req, res) {
    db.Genre.findByPk(req.params.id)
        .then( genre => {
            res.send(200, JSON.stringify(genre));
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.post("/", function(req, res) {
    db.Genre.create({
        name: req.body.name
    })
        .then( genre => {
            res.send(200, JSON.stringify(genre))
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.put("/:id", function(req, res) {
    db.Genre.update({
        name: req.body.name
    }, 
    {
        where: {
          id: req.params.id
        }
    })
        .then( genre => {
            res.send(200);
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.del("/:id", function(req, res) {
    db.Genre.destroy({
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