const express=require('express');
let app =express();
const port =process.env.port || 9999;
app.use('/css',express.static(__dirname+ '/public'));
app.use((req,res,next)=>{
    console.log('middleware');
    next();

})
app.get('/',(req,res)=>{
    res.send(`
    <!DOCTYPE html> 
<html lang="en">
    <head>
        <title>Document</title>
        <meta name="viewport" content="width=device-width, user-scalable='no' initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1>Hello</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Consequatur cupiditate sed earum accusamus quidem fugiat 
             officia asperiores provident omnis, quod inventore vero eos quas 
             quibusdam, totam nulla, culpa adipisci beatae?
        </p>
    </body>
</html>




    `)
})
app.listen(port);   
console.log("it's working on "+ port);
