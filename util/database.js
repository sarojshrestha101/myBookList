const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callBack) => {
    MongoClient.connect(
        'mongodb+srv://myBookList:dTsReMB90zkc2Ezn@mybooklist-g4jjc.mongodb.net/books?retryWrites=true'
    ).then(client => {
        console.log('Connected!');
        _db = client.db('myBookList');
        callBack();
    }).catch(err => {
        console.log(err);
        throw err;
    });

};

const getDb = () =>{
    if(_db){
        return _db;
    }else{
        throw 'No db connected!!';
    }
};


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;