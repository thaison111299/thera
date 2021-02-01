const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
// const io = socketio(server);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// httpServer.listen(3000);


app.use(cors());

app.get("/", (req, res) => {
    console.log("someone reqiue")
})

// var room = []

io.on('connection', socket => {
    console.log("socket: have a new connection")

    socket.on('join', (data) => {
        console.log(data)
    })

    socket.on('disconnect', () => {
        console.log("socket: some one disconnect")
    })

})

server.listen(process.env.PORT || 5000, () => console.log(`listening at 5000...`));



