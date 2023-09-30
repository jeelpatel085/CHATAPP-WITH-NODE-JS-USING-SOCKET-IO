const express = require('express');
const app = express();

const http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'))


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')    
})




http.listen('9000',()=>{
    console.log('sever running on port 9000')
})

const io = require('socket.io')(http)

io.on('connection',(socket)=>{
    console.log('conected...')

    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)

    })
})