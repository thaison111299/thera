const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// const io = socketio(server);
const io = socketio(server, {
    cors: {
        origin: "https://thaison111299.github.io",
        methods: ["GET", "POST"]
    }
});
const thera = require('./thera')

app.use(cors());

var users = [
    { name: "son", room: "room1" }
]

io.on('connection', socket => {
    console.log("socket: have a new connection\nsocket id: ", socket.id)
    io.emit
    socket.on('join', (data) => {
        console.log(data)
        io.emit('send-message', { message: `${data.name} join the chat room`, name: "IO", room: data.room })

    })

    socket.on('send-message', (data) => {
        console.log("message receive: ", data.message)
        const { message, name, room } = data
        io.emit('send-message', { message, name, room })

    })
    socket.on('leave', data => {
        io.emit('send-message', { message: `${data.name} leave`, name: "IO", room: data.room })

    })

    socket.on('disconnect', () => {

        console.log("socket: some one disconnect")
    })
})

server.listen(process.env.PORT || 5000, () => console.log(`listening at 5000...`));



