const express = require('express')
const router = express.Router()
const db = require('../database')

router.get("/", function(req, res) {
    db.Book.findAll({
        include: db.Genre
    })
        .then( books => {
            res.status(200).send(JSON.stringify(books));
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.get("/:id", function(req, res) {
    db.Book.findByPk(req.params.id,
        {
            include: db.Genre
        })
        .then( book => {
            res.status(200).send(JSON.stringify(book));
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error));
        })
})

router.post("/", function(req, res) {
    console.log(req.body)
    db.Book.create({
        name: req.body.name,
        rate: req.body.rate,
        year: req.body.year,
        description: req.body.description,
        DirectorId: req.body.directorid
    })
        .then( book => {
            const associations = req.body.genres.map((id) => ({"BookId": book.id, "GenreId": id}))
            db.BookGenre.bulkCreate(associations)
            .then(bookGenre => {
                res.status(200).send(JSON.stringify(book))
            }).catch( error => {
                res.status(500).send(JSON.stringify(error))
            })
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error))
        })
})

router.put("/:id", function(req, res) {
    db.Book.update({
        name: req.body.name,
        rate: req.body.rate,
        year: req.body.year,
        description: req.body.description,
        DirectorId: req.body.directorid
    }, 
    {
        where: {
          id: req.params.id
        }
    })
        .then( book => {
            const associations = req.body.genres.map((id) => ({"BookId": book.id, "GenreId": id}))
            db.BookGenre.bulkCreate(associations)
            .then(bookGenre => {
                res.status(200).send(JSON.stringify(book))
            }).catch( error => {
                res.status(500).send(JSON.stringify(error))
            })
        })
        .catch( error => {
            res.status(500).send(JSON.stringify(error))
        })
})

router.delete("/:id", function(req, res) {
    db.Book.destroy({
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