const WebSocket = require('ws');


module.exports = (http) => {
    const server = new WebSocket.Server({
        server : http,
        // port : process.env.PORT || 3005
    })
    // console.log("socket.js",server)
    server.on("connection", (socket,request)=>{
        console.log(request)
    })
}