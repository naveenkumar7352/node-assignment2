const express =require("express");
const app= express();
app.get("/", function(req,res){
     res.write("<h1>hellow word</h1>");
     res.write("<h2>my name is naveen kumar</h2>");
     res.write("<h3>naveen pratap yadav</h3>");
    // res.send("<h1>naveen pratap yadav</h1>");
     res.end();

    // res.json({name :"naveen kumar"})
    
});
app.get("getUsers1", function(req,res){
    res.send("<h2>hellow word</h2>");
    // res.json({name :"naveen kumar"})
    
});
app.get("getUsers2", function(req,res){
    res.send("<h2>hellow word</h2>");
    // res.json({name :"naveen kumar"})
    
});
app.get("getUsers3", function(req,res){
    res.send("<h2>hellow word</h2>");
    // res.json({name :"naveen kumar"})
    
});
app.listen(3010);