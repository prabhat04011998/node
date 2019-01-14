const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url==='/')
    {
        fs.readFile('./data.html','UTF-8',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        })
    }
    else
    {
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('File not Found');
    }

}).listen(3333);
console.log('listening on port 3333');
