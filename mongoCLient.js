const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://2bhere4u:SHIDVCojfgElV5QZ@here4u.ysbvd5q.mongodb.net/?retryWrites=true&w=majority&appName=here4u";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  collection.insertOne({name: "Device A", status: "active"}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Document inserted successfully");
    }
    client.close();
  });
});