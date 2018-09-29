var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var db = require('../db');

router.get('/:pag', function(req, res, next) {
    let pagesize = 10;
    let n = req.params.pag;
    
    db.get('convenios').find()
        .sort( { nome: 1 } )
        .skip(pagesize*(n-1))
        .limit(pagesize)
        .toArray(function(err, docs) {
            if (err) console.log(err);
            else res.send(docs);
    });
});

router.post('/', function(req, res, next) {
    db.get('convenios').insertOne( req.body );
    res.send(req.body);
});

router.delete('/:id', function(req, res, next) {
    db.get('convenios').deleteOne( { _id: ObjectId(req.params.id) } );
    res.send(req.body);
});

router.delete('/:id', function(req, res, next) {
    db.get('convenios').deleteOne( { _id: ObjectId(req.params.id) } );
    db.get('convenios').insertOne( req.body );
    res.send(req.body);
});

module.exports = router;
