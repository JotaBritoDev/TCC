MongoClient = require('mongodb').MongoClient;

//const server = 'mongodb://localhost:27017';
const server = 'mongodb+srv://healthy:tcc@healthy-eb2wc.mongodb.net/test?retryWrites=true';
const database = 'healthy';

MongoClient.connect(server, { useNewUrlParser: true }, function (err, conn) {
    if (err) {
        console.log(err);
        global.db = undefined;
    } else {
        global.db = conn.db(database);
    }
});

function get(collection) {
    if (!collection) {
        return global.db;
    } else {
        return global.db.collection(collection);
    }
}

function find(collection, value, index, obj) {
    var documentos;
    global.db.collection(collection).find(value, index, obj)
    .toArray(function(err, docs) {
        if (err) {
            console.log(err);
            return undefined;
        } else {
            return docs;
        }
    })
}

function findMedicamentos(callback) {
    global.db.collection('medicamentos').find().toArray(function(err, docs) {
        if (err) console.log(err);
        callback(docs);
    })
}

// function get(collection, callback) {
//     global.db.collection(collection).find().toarray(function(err, docs) {
//         if (err) {
//             console.log(err);
//         } else {
//             callback(docs);
//             return 'isso é um retorno.';
//         }
//     });
// }

module.exports = {
    get,
    find,
    findMedicamentos
}
