import http from "http";

const Server = http.createServer( (req , res) => {
    //   console.log(req);
     console.log("new request received" );
    res.end("Hello From Server Again")
});

Server.listen(8001 , () => console.log(`Server Started at http://localhost:8001`));
