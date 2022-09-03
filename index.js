const { urlencoded } = require("express")
const express = require("express")
const app = express()
const morgan = require("morgan")

const port = process.env.PORT || 5000

// view engine setup 
app.set("view engine")
app.set("views","views")

// middleware setup 
const middleware = [
    express.static("public"),
    express.json(),
    express.urlencoded({extended:true}),
    morgan("dev"),  
]

app.use(middleware)


app.get("/",(req,res)=> {

    res.send("hello from home page")
})


app.listen(port,()=> {
    console.log(`server is runnig on ${port}`)
})