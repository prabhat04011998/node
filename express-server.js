const express=require('express');
let app =express();
const port =process.env.port || 9999;
app.get('/',(req,res)=>{
    res.send('<h1>hello prabhat</h1>');
})
app.get('/api',(req,res)=>{
    //res.send('<h1>prabhat ye api page h</h1>');
    res.json({name:'prabhat sharma'})
})
app.listen(port);   
console.log("it's working on "+ port);
