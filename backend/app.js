import express from "express"
import { controlador } from "./controlador.js"
const app = express()

const controlador = (req, res) => {
    res.status(200).send("hello from GET")
}

app.get("/posts", controlador);


app.post("/posts",(req, res)=>{
    res.status(200).send("hello from POST")
})

app.patch("/posts",(req, res)=>{
    res.status(200).send("hello from PATCH")
})

app.put("/posts",(req, res)=>{
    res.status(200).send("hello from PUT")
})

app.delete("/posts",(req, res)=>{
    res.status(200).send("hello from DELETE")
})


app.listen(3000)
console.log("Server on port 3000");