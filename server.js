"use strict";

const { PeerServer } = require("peer");

const port = Number(process.env.PORT || 9000);

const server = PeerServer({
  port,
  path: "/",
  proxied: true,
  allow_discovery: false,
  alive_timeout: 60000,
  expire_timeout: 5000
});

server.on("connection", (client) => {
  console.log(`[PeerServer] connected: ${client.getId()}`);
});

server.on("disconnect", (client) => {
  console.log(`[PeerServer] disconnected: ${client.getId()}`);
});

console.log(`[PeerServer] listening on port ${port}, path /`);
