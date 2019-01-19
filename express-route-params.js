const express=require('express');
let app =express();
const port =process.env.port || 9999;
app.get('/',(req,res)=>{
    res.send('<h1>HOME</h1>');
})
app.get('/post/:id',(req,res)=>{
    res.send(`<h1>ID is </h1> ${req.params.id}`);
    
})
app.get('/post/:id/category/:category_id',(req,res)=>{
    res.send(`<h1>ID is ${req.params.id} </h1>
    
    <p>cateogry id is ${req.params.category_id}`);
    
    
})
app.listen(port);   
console.log("it's working on "+ port);
