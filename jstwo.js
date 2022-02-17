const http=require('http');
const {load}=require('./jsone.js');
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors({
    orgin:"*",
}))
const hostname='127.0.0.1'; 
const port ='5200';

app.listen(port,hostname,()=>console.log("server running"));
app.get('/emp',(req,res)=>
{
    res.send(load())
});