const https=require('https');
const http=require('http');
const fs=require('fs');

const url='https://jsonplaceholder.typicode.com/posts';

http.createServer((req,serverRes)=>{
    if(req.method === "GET" && req.url==="/posts"){
        https.get(url,(httpRes)=>{
            httpRes.on('data',data=>{
                httpRes.setEncoding('UTF-8');

                console.log(data); 
            })
            httpRes.on('end',()=>{
                serverRes.end();
                console.log('its over');
            })
        })

    }
}).listen(4444);
console.log('listening');

