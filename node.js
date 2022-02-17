var http=require('http');
const fs=require('fs');
const path=require('path');
const hostname='127.0.0.1'; // 192.168.0.105 -ipconfig
const port=5000;
const server=http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-Type':'text/html'})
    var url=request.url;
    console.log(url);
    if(url=='/index'){
        fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data)=>
    {
        if(err) throw err;
        response.end(data);
    });
    }
    if(url=='/html1'){
        fs.readFile(path.join(__dirname,'html1.html'),'utf-8',(err,data)=>
    {
        if(err) throw err;
        response.end(data);
    });
    }
    
    // response.end();
    // response.end('<h1 style="color:green;"> WELCOME CHANDU </h1>');
});

server.listen(port,hostname,()=>
{
    console.log('SUCCESS %s on %s',hostname,port);
});