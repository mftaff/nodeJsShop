const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = cb => {
  MongoClient.connect('mongodb+srv://meir:qQY2ByJrwvU4hLLm@cluster0-zc7pz.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client => {
    console.log('MongoDB Connected!');
    _db = client.db();
    cb();
  })
  .catch(err => {
    console.log("MongoDB failure")
    console.log(err);
    throw err;
  });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
