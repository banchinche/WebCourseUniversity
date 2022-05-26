const Router = require('restify-router').Router;
const router = new Router();
const db = require('../database')

router.get("/me", function(req, res) {
    db.User.findByPk(req.user.id)
        .then( user => {
            res.send(200, JSON.stringify(user));
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.put("/me", function(req, res) {
    db.User.update({
        email: req.body.email,
        password: req.body.password
    }, 
    {
        where: {
          id: req.user.id
        }
    })
        .then( user => {
            res.send(200);
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.get("/books", function(req, res) {
    db.User.findByPk(req.user.id,
        {
            include: db.Book
        })
        .then( movies => {
            res.send(200, JSON.stringify(movies));
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.put("/books", function(req, res) {
    const associations = req.body.books.map((id) => ({"BookId": id, "UserId": req.user.id}))
    db.UserBook.bulkCreate(associations)
        .then( books => {
            res.send(200);
        })
        .catch( error => {
            res.send(500, JSON.stringify(error));
        })
})

router.del("/:id", function(req, res) {
    db.UserBook.destroy({
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