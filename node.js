var http=require('http');
var Request=require('request');
var port = 8080;

var host =process.env.HOST;
var s = http.createServer();
s.on('request', function(request, response) {
    response.writeHead(200);


    var data = '';
     request.on('data', function(chunk) {
        data += chunk.toString();
    });
    request.on('end', function() {
        console.log(data);
        if(data=='All'){
         Request.get({
    "headers": { "content-type": "application/json" },
    "url": "http://"+host+"/demo/all",

}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }

    console.log(body);
});}
       else{
       var arr=data.split(" ");
       fname=arr[0];
       lname=arr[1];
       age=arr[2];
       Request.get({
    "headers": { "content-type": "application/json" },
    "url": "http://"+host+"/demo/add?fname="+fname+"&lname="+lname+"&age="+age,

}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log(body);
});

}

        response.write("See logs for Data");
        response.end();
    });
});

s.listen(port);
