const express = require("express")  // express require gareko
const app = express() // express lai trigger gareko

require("./database/connection")


// let app = require("express")()
app.get("/books", (req, res)=>{
    // logic to fetch books from database

    res.json({
        message: "Books fetched successfully."
    })
})

app.post("/books", (req, res)=>{
    // logic to add book to database goes here..
    
    res.json({
        message: "Book created successfully."
    })
})

app.delete("/books/:id", (req, res)=>{
    // logic to delete book

    res.json({
        message: "Book deleted successfully."
    })
})

app.patch("/books/:id", (req, res)=>{
    // logic to update book

    res.json({
        message: "Book updated successfully."
    })
})


const port = 3000
app.listen(port,()=>{
    console.log("Server started successfully at port " + port)
})