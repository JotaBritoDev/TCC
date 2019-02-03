const router = require('express').Router();
const ObjectId = require('mongodb').ObjectID;
const db = require('../db');

function database() {
    return db.get('medicos');
}

router.get('/:pag', function(req, res, next) {
    let pagesize = 10;
    let n = req.params.pag;
    
    database().find()
        .skip(pagesize*(n-1))
        .limit(pagesize)
        .toArray(function(err, docs) {
            if (err) console.log(err);
            else {
                res.send(docs.sort((a, b) => {
                    return a.nome.toUpperCase() > b.nome.toUpperCase() ? 1 : -1;
                  }));
            }
    });
});

router.post('/', function(req, res, next) {
    delete req.body._id;
    database().insertOne( req.body );
    res.send(req.body);
});

router.delete('/:id', function(req, res, next) {
    database().deleteOne( { _id: ObjectId(req.params.id) } );
    res.send(req.body);
});

router.put('/:id', function(req, res, next) {
    delete req.body._id;
    database().updateOne( { _id: ObjectId(req.params.id) }, { $set: req.body } );
    res.send(req.body);
});

module.exports = router;
