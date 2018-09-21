var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
}

exports.connect = function() {
  if (state.db) {
      return true;
  }

  MongoClient.connect('mongodb://localhost:27017/healthy', function(err, db) {
    if (err) {
        console.log(err);
        return false
    }
    state.db = db;
    return true;
  })
}

exports.get = function() {
  return state.db;
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
 
// const url = 'mongodb://localhost:27017';
// const dbName = 'healthy';
// var db;
 
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
 
//   db = client.db(dbName);

//   console.log(db);

//   client.close();
// });

// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('documents');
//     // Insert some documents
//     collection.insertMany([
//       {a : 1}, {a : 2}, {a : 3}
//     ], function(err, result) {
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     });
//   }

// module.exports = { function() {
//     return db;
// } }
