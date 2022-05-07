const express = require('express')
const mongoose=require('mongoose')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
  })







  app.listen(3050, ()=>{
  try{
     mongoose.connect("mongodb+srv://shailendra:SK1234@cluster0.j9rmd.mongodb.net/facebook?retryWrites=true&w=majority")
     console.log("coonected")
  }catch(error){
     console.log(error)
  }
    
})




