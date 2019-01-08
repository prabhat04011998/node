const https=require('https');
const fs=require('fs');
url="https://jsonplaceholder.typicode.com/posts"
https.get(url,res=>{
    res.setEncoding('utf-8');
    let body='';
    res.on('data',data=>{
        body+=data;
    });
    res.on('end',()=>{
        body =JSON.parse(body);
        console.log(
            `${body[3].title}
        
        `
        )
        //fs.writeFile('data.json',body,'utf-8',(err)=>{
        //    if(err) return err;
        //    console.log("Pulled all the posts");
        //});
         
    })

});