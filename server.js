const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
server.listen(3000, () => {
  process.stdout.write('server running at http://localhost:3000\n');
});