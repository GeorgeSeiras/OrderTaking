import * as mysql from "mysql";

export var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'cafe'
});

connection.connect(function (err: any) {
    if (err) throw err;

    var createTables = 'create table if not exists tables(id int primary key auto_increment)';
    var createOrders = 'create table if not exists orders(id int primary key auto_increment,item varchar(50) not null,tableID int not null,FOREIGN KEY (tableID) REFERENCES tables(id))'
    
    connection.query(createTables,(err,results,fields)=>{
        if(err){
            console.log(err.message);
        }
    });
    connection.query(createOrders,(err,results,fields)=>{
        if(err){
            console.log(err.message);
        }
    });
});