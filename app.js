var http=require('http');
http.createServer(function (req,res) {
    res.end('welcome')
}).listen(3002,function(){
    console.log('app start')
})