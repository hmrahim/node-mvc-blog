const { urlencoded } = require("express")
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose  = require("mongoose")


const port = process.env.PORT || 5000
const DB_USER = "blog"
const DB_PASS = "cjSBnh5muloGPnZx"


// import routes
const authRoute = require("./routes/authRoute")

// view engine setup 
app.set("view engine","ejs")
app.set("views","views")



// middleware setup 
const middleware = [
    express.static("public"),
    express.json(),
    express.urlencoded({extended:true}),
    morgan("dev"),  
]

app.use(middleware)
app.use("/auth",authRoute)


app.get("/",(req,res)=> {

    res.json("hello world")
})

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.trq2z.mongodb.net/blogapp`,{
    useNewUrlParser:true
})
.then(()=> {
    app.listen(port,()=> {
        console.log(`server is runnig on ${port} and database connected succesfully `)
    })

})
.catch(e=> {
    console.log(e)
})

