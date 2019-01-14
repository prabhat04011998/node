const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});//text/html - for html type text
    res.end('<h1>hello guys this is prabhat sharma</h1>');

})
server.listen(9111);
console.log("our server is runnig on port 9111")