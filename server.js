//Create a HTTP Server using NodeJs

const http = require('http')
const server = http.createServer(function(req,res) {
   console.log(req.method,req.url);
   if(req.url == "/"){
    res.write("Request looks Good.");
   }else if(req.url =='\pizza'){
    res.write("Pizza is ready!")
   }else{
    res.write("kkkkkkkkkk")
   }
  res.end();
});
const port=5000;
const host="127.0.0.2";

server.listen(port,function() {
  console.log(`Server is running at http://${host}:${port}/`);

});
