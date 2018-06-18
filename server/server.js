const http = require('http');
const app = require('./app');
const socketIo = require("socket.io");

const port = process.env.PORT || 3001;

const server = http.createServer(app);

const io = socketIo(server);


module.exports = io;

require('./api/routes/trade');

// io.on('connection', client => {
//     console.log(`User ${client.id} connected!`);
//
//     // client.on('loadData', handleLoad);
//
//     client.on('disconnect', () => {
//         console.log(`user: ${client.id} disconnected!`);
//     })
// });

server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${port}`);
});
