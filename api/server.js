const express = require('express')

const hubsRouter = require('../hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
});

// the router handles endpoints that begins with /api/hubs
server.use('/api/hubs', hubsRouter);

module.exports = server;