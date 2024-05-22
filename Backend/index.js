const express  = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types")
const { Todos} = require("./database");

app.use(express.json());


app.get("/todos", async function(req,res){
    // 
});

app.post("/todo", async function(req,res){
    try{
        const createPayload = req.body;
        const parsePayload = createTodo.safeParse(createPayload);
        if(!parsePayload.success){
            res.status(411).json({
                msg:"you sent the wrong input"
            });
            return;
        }
        const newTodo = await Todos.create({
            title: createPayload.title,
            description: createPayload.description
        })
        return res.json({
            msg:'courses created successfully',todo: createPayload
        });
    } catch(error){
        res.json({
            error:error
        });
    }
});

app.put("/todo/:id", async function(req,res){
    // 
});

app.delete("/todo/:id", function(req,res){
    // 
});