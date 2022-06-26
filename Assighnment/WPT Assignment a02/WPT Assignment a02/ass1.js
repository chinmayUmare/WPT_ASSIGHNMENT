const url="";
let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"chinmay",
    port:3306
};
const mysql =require('mysql2');
const con=mysql.createConnection(datab);

console.log("Database adventures");