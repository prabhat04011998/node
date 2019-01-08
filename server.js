const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello guys this is prabhat sharma');

})
server.listen(9111);
console.log("our server is runnig on port 9111")