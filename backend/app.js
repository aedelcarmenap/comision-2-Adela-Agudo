const express = require ("express")

const app = express()

app.get("/",(request, response)=>{
    response.send("hello from GET")
})

app.post("/",(request, response)=>{
    response.send("hello from POST")
})

app.patch("/",(request, response)=>{
    response.send("hello from PATCH")
})

app.put("/",(request, response)=>{
    response.send("hello from PUT")
})

app.delete("/",(request, response)=>{
    response.send("hello from DELETE")
})


app.listen(3000)
console.log("Server on port 3000");