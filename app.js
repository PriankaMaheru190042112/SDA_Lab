const express = require ('express')
const app= express()

app.get('/', (req,res)=>{
    res.send("welcome to azure")
})

port = process.env.PORT || 5001

app.listen(port, ()=>{
    console.log("Server is running on port 8080")
})