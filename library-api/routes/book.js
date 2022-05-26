const Router = require('restify-router').Router;
const router = new Router();
const db = require('../database')

router.get("/", function(req, res) {
    db.Book.findAll({
        include: db.Genre
    })
        .then( books => {
            res.send(200, JSON.stringify(books));
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.get("/:id", function(req, res) {
    db.Book.findByPk(req.params.id,
        {
            include: db.Genre
        })
        .then( book => {
            res.send(200, JSON.stringify(book));
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
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
                res.send(200, JSON.stringify(book))
            }).catch( error => {
                res.send(500, JSON.stringify(error));
            })
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
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
                res.send(200, JSON.stringify(book))
            }).catch( error => {
                res.send(500, JSON.stringify(error));
            })
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.del("/:id", function(req, res) {
    db.Book.destroy({
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