const express = require('express')
const cors = require('cors')
const connectDB = require('./config/database')
//const mongoose=require('mongoose')
const router = require('./config/routes')
const app = express() 
const port = 3025


app.use(cors())
app.use(express.json())
app.use('/',router)
app.use('/users',router)
connectDB()

app.listen(port,()=>{
    console.log('listening to the port', port)
})