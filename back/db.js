// const server = 'mongodb://localhost:27017';
const server = 'mongodb+srv://healthy:tcc@healthy-eb2wc.mongodb.net/test?retryWrites=true';
const databaseName = 'healthy';

var database;

function conectar() {
    let conexao;

    require('mongodb').MongoClient.connect(server, { useNewUrlParser: true }, function (err, conn) {
        if (err) {
            database = undefined;
        } else {
            conexao = conn;
            database = conn.db(databaseName);
        }
    });

    process.on('SIGINT', () => {
        conexao.close();
        process.exit();
      });
}

function get(collection) {
    if (!collection) {
        return database;
    } else {
        return database.collection(collection);
    }
}

conectar();

module.exports = {
    get
}
