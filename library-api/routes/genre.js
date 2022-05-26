const express = require('express')
const router = express.Router()
const db = require('../database')

router.get("/", function(req, res) {
    db.Genre.findAll()
        .then( genres => {
            res.status(200).send(JSON.stringify(genres));
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.get("/:id", function(req, res) {
    db.Genre.findByPk(req.params.id)
        .then( genre => {
            res.status(200).send(JSON.stringify(genre));
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.post("/", function(req, res) {
    db.Genre.create({
        name: req.body.name
    })
        .then( genre => {
            res.status(200).send(JSON.stringify(genre))
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
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
            res.status(200).send();
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.delete("/:id", function(req, res) {
    db.Genre.destroy({
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

module.exports = router