
var mysql = require ('mysql');
var con =
mysql.createConnection({
    host: "localhost",
    user: "youruseername",
    password: "yourpassword",
    database: "mydb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connect!");
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),address VARCHAR(255)"),
    con.query(sql,function(err,result){
        if (err) thhrow err;
        console.log("Table created");
    });
});