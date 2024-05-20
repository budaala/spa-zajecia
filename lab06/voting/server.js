const WebSocket = require('ws');
const express = require('express');
const http = require('http');
let results = {
    pizza: 0,
    pasta: 0
};
// const wsServer = new WebSocket.Server({ port: 3000 });
const app = express();
const server = http.createServer(app);
const wsServer = new WebSocket.Server({ server: server, path: '/voting'});
const clients = new Set();
app.use(express.static('client'));
server.listen(3000);
wsServer.on('connection', (socket) => {
    console.log('Client connected!');
    clients.add(socket);
    socket.on('message', (message) => {
        // handle vote
        if (message == 'pizza') {
            results.pizza++;
          } else if (message == 'pasta') {
            results.pasta++;
          }
        // results[message]++;
        console.log('Message received: ' + message);
        wsServer.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                // send current results to all clients
                console.log('Sending to a client from clients.');
                client.send(JSON.stringify(results));
            }
        });
    });
    socket.on('error', (error) => {
        console.log('Error:' + error);
    });
    socket.on('close', () => {
        console.log('Client disconnected!');
        clients.delete(socket);
    });
    // send current results to a newly connected client
    console.log('Sending to a newly connected client.');
    socket.send(JSON.stringify(results));
});