var MongoClient = require('mogodb').MongoClient;
var url = "mongodb://local:27017/";

MongoClient.connect(url, function(err,db) {
    if (err) throw err;
    var dbo =db.db("mydb");
    dbo.createCollection("customers", function(err,res)
{
    if (err) thor err;
    console.log("collection created!");
    db.close();
    });
});