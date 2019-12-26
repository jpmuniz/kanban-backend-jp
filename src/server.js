import Hapi from "@hapi/hapi";

const server = Hapi.server({
  port: 3333,
  host: "localhost",
  routes: {
    cors: true
  }
});

module.exports = server;
