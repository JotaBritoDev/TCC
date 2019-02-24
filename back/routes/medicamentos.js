const router = require('express').Router();
const ObjectId = require('mongodb').ObjectID;
const db = require('../db');

function database() {
    return db.get('medicamentos');
}

router.get('/id/:id', function(req, res, next) {    
    database()
        .findOne( { _id: { $eq: ObjectId(req.params.id) } },
        function(err, docs) {
            if (err) console.log(err);
            else res.send(docs);
    });
});

router.get('/:pag', function(req, res, next) {
    let pagesize = 10;
    let n = req.params.pag;
    
    database().find()
        .collation( { locale: 'pt' } )
        .sort( { nome: 1 } )
        .skip(pagesize*(n-1))
        .limit(pagesize)
        .toArray(function(err, docs) {
            if (err) console.log(err);
            else res.send(docs);
    });
});

router.get('/:pag/:filtro', function(req, res, next) {
    let pagesize = 10;
    let n = req.params.pag;
    
    database().find( { nome: { $regex: `(?i)${req.params.filtro}`} } )
        .collation( { locale: 'pt' } )
        .sort( { nome: 1 } )
        .skip(pagesize*(n-1))
        .limit(pagesize)
        .toArray(function(err, docs) {
            if (err) console.log(err);
            else res.send(docs);
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
