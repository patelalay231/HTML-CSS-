const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);

const io = new Server(server);

// enduser is socket
io.on("connection", (socket) => {
    socket.on("user-message",(message) => {
        io.emit("message",message);
    })
})

app.use(express.static('public'));

app.get("/",(req,res)=>{
    return res.render("index");
})

server.listen(8000, () => {console.log("server started on port 8000")});