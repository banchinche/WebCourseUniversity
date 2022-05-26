const express = require('express')
const router = express.Router()
const db = require('../database')

router.get("/", function(req, res) {
    db.Director.findAll()
        .then( directors => {
            res.status(200).send(JSON.stringify(directors));
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.get("/:id", function(req, res) {
    db.Director.findByPk(req.params.id)
        .then( director => {
            res.status(200).send(JSON.stringify(director));
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.post("/", function(req, res) {
    db.Director.create({
        name: req.body.name
    })
        .then( director => {
            res.status(200).send(JSON.stringify(director))
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
            res.status(200).send();
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.delete("/:id", function(req, res) {
    db.Director.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.status(204).send();
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

module.exports = routers