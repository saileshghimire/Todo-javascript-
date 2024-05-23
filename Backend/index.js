const express  = require("express");
const app = express();
const cors = require("cors");
const { createTodo, updateTodo } = require("./types")
const { Todos} = require("./database");

app.use(express.json());
app.use(cors());


app.get("/todos", async function(req,res){
    const todos = await Todos.find({});
    return res.json({
        todos
    });
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
            description: createPayload.description,
            completed: false
        });
        return res.json({
            msg:"courses created successfully",
            todo: newTodo
        });
    } catch(error){
        res.json({
            error:error
        });
    }
});

app.put("/completed", async function(req,res){
    try{
        const updatePayload = req.body;
        const parsePayload = updateTodo.safeParse(updatePayload);
        if(!parsePayload.success){
            res.status(411).json({
                msg:"you sent the wrong input"
            });
            return;
        }
        await Todos.updateOne({
            _id: req.body.id
        },{
            completed:true
        });
        res.json({
            msg:" Todo marked as compleated"
        })
        
    } catch(error){
        res.json({
            error:error
        });
    }
});

app.delete("/todo/:id", function(req,res){
    // 
});

app.listen(3000);