const routes=require('./routes')
const {book}=require('./models')
const bodyParser=require('body-parser');
const express=require('express')


const app=express()
app.use(bodyParser.urlencoded({extended:true}));
routes(app);

const port=3200;



app.listen(port,()=>{
    console.log('server is running on port',port)
})