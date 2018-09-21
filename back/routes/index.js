var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/medicamentos', function(req, res, next) {  
  console.log('teste1');
  db.connect();  
  console.log('teste2');
   const collection = db.get().collection('medicamentos');
   console.log('teste3');
  //  console.log('TESTE', collection);
  //  console.log('teste4');
  // console.log(collection.find());

  res.send('final');
});

router.get('/teste', function(req, res, next) {
  var nome = 'joao';
  var idade = 32;
  db.saveCustomer(nome, idade, function() {
    res.redirect('/')
  })
})

module.exports = router;
