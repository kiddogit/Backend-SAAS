const express = require("express")
const app = express()

require("./database/connection")

// app.get("/",(req,res)=>{
//     res.json({
//         message: "Hello"
//     })
// })

app.get("/books", (req, res)=>{
    res.json({
        message: "Book fetced successfully."
    })
})

app.post("/books", (req, res)=>{
    res.json({
        message: "Book created successfully."
    })
})

app.delete("/books/:id", (req, res)=>{
    res.json({
        message: "Book deleted successfully."
    })
})

app.patch("/books/:id", (req, res)=>{
    res.json({
        message: "Book updated successfully."
    })
})


const port = 3000
app.listen(port,()=>{
    console.log("Server started successfully at port " + port)
})