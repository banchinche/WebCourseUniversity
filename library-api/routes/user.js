const express = require('express')
const router = express.Router()
const db = require('../database')

router.get("/", function(req, res) {
    db.User.findAll()
        .then( users => {
            res.status(200).send(JSON.stringify(users));
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.get("/:id", function(req, res) {
    db.User.findByPk(req.params.id)
        .then( user => {
            res.status(200).send(JSON.stringify(user));
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.put("/:id", function(req, res) {
    db.User.update({
        email: req.body.email,
        password: req.body.password
    }, 
    {
        where: {
          id: req.params.id
        }
    })
        .then( user => {
            res.status(200).send();
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.delete("/:id", function(req, res) {
    db.User.destroy({
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