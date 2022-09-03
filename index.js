const { urlencoded } = require("express")
const express = require("express")
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(urlencoded({extended:true}))


app.get("/",(req,res)=> {

    res.send("hello from home page")
})


app.listen(port,()=> {
    console.log(`server is runnig on ${port}`)
})