const router = require('express').Router();
const ObjectId = require('mongodb').ObjectID;
const db = require('../db');

function database() {
    return db.get('consultas');
}

router.get('/list/:pag/:dt', function(req, res, next) {
    let pagesize = 10;
    let n = req.params.pag;
    const dataIni = new Date();

    // { data: { $gte: `${dataIni}` } }
    database().find(  )
        .collation( { locale: 'pt' } )
        .sort( { data: 1 } )
        .skip(pagesize*(n-1))
        .limit(pagesize)
        .toArray(function(err, docs) {
            if (err) console.log(err);
            else res.send(docs);
    });
});

router.get('/data/:dt', function(req, res, next) {
    const dataIni = new Date(req.params.dt + ' 00:01:0000');
    const dataFim = new Date(req.params.dt + ' 23:59:0000');
    database().find( { data: { $gte: `${dataIni}`, $lte: `${dataFim}` } } )
        .collation( { locale: 'pt' } )
        .sort( { data: 1 } )
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
