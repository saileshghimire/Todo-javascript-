import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" id="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} /> 
        <br />
        <input type="text" id="description" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}/> <br />
        <button onClick={function(){
            fetch("http://localhost:3000/todo",
                {
                    method:"POST",
                    body:JSON.stringify({
                        title,
                        description
                    }),
                    headers:{
                        "content-type": "application/json"
                    }
                }
            )
            .then(async function(res){
                const json = await res.json();
                alert("todo added");
            })
        }}>Add a todo</button>
    </div>
}
