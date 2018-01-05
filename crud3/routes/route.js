const express=require('express');
var mysql=require('mysql');
var router=express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "secret",
    database:"test"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
router.get('/contacts',(req,res,next)=>{
var sql="select * from person";
    con.query(sql,function (err,results) {
            if(err) throw err;
            else
            {
            res.json(results);
            console.log(results);
        }
    });
    //res.send("retrieving response data");
});
router.post('/contact',(req,res,next)=>{
    var newcontact=req.body;
    console.log(req.body);
var sql='INSERT INTO person SET ?';
con.query(sql,[newcontact],function (err,results) {
//var newcontact={ID:req.body.ID,FNAME:req.body.FNAME,LNAME:req.body.LNAME,TOWN:req.body.TOWN};
//var sql="insert into person(ID,FNAME,LNAME,TOWN) values(?,?,?,?)";
//con.query(sql,[newcontact.ID,newcontact.FNAME,newcontact.LNAME,newcontact.TOWN],function (err,results) {
    if(err) throw err;
    else
    {
        console.log("inserted");
        res.send(results);
    }
});
});
router.delete('/contact',(req,res,next)=>{
    var ID=req.params.id;
console.log(id);
console.log(ID);
var sql="delete from person where ID=?";
con.query(sql,[ID],function (err,results) {
    if(err) throw err;
    else
    {
        res.send("deleted");
    }
});
});
module.exports=router;