const router = require('express').Router();
const ObjectId = require('mongodb').ObjectID;
const db = require('../db');

function database() {
    return db.get('login');
}

router.post('/', function(req, res, next) {
    database().find( { usuario: { $eq: `${req.body.usu}` }, senha: { $eq: `${req.body.snh}` } } )
        .collation( { locale: 'pt' } )
        .count(function(err, r) {
            if (err) console.log(err);
            else res.send({ retorno: r > 0 });
    });
});

module.exports = router;
