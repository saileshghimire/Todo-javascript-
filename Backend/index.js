const express  = require("express");
const app = express();


app.use(express.json());


app.get("/todos", async function(req,res){
    // 
});

app.post("/todo", async function(req,res){
    // 
});

app.put("/todo/:id", async function(req,res){
    // 
});

app.delete("/todo/:id", function(req,res){
    // 
});