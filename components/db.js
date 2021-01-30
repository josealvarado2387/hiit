const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://jose:Ireland17@cluster0.fa7wx.mongodb.net/?retryWrites=true&w=majority';

// Database Name
const dbName = 'ca1cbwa2020092';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
function createTextIndex(db, callback) {
    // Get the documents collection
    const collection = db.collection('bodytype');
    // Create the index
    collection.createIndex(
      { comments : "Results" }, function(err, result) {
      console.log(result);
      callback(result);
    });
  };