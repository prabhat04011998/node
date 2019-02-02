const express=require('express');
const bodyParser=require('body-parser');
let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/assets',express.static(__dirname+ '/public'));
app.use((req,res,next)=>{
    console.log('middleware');
    next();

})
app.post('/post',(req,res)=>{
    console.log(req.body);
})

app.listen(9999);   
console.log("it's working on "+ 9999);
