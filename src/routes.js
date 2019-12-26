import server from "./server";
import task from "./app/controller/TaskController";

server.route({
  method: "GET",
  path: "/gettasks",
  handler: async () => {
    const response = await task.index();
    console.log(response);
    return { response };
  }
});

server.route({
  method: "post",
  path: "/createtodo",
  options: {
    cors: {
      maxAge: 60,
      credentials: true
    }
  },
  handler: async req => {
    const a = await task.store(req.payload);
    return { message: a };
  }
});

server.route({
  method: "post",
  path: "/updatetodo",
  handler: async req => {
    const a = await task.update(req.payload);
    return { message: a };
  }
});

server.route({
  method: "post",
  path: "/deletetodo",
  handler: async req => {
    const response = await task.delete(req.payload);
    return { response };
  }
});

server.route({
  method: ["GET", "POST"],
  path: "/{any*}",
  handler: (request, h) => {
    const accept = request.headers.accept;

    if (accept && accept.match(/json/)) {
      //  return Boom.notFound("Fuckity fuck, this resource isn’t available.");
    }

    return "Página não encontrada!";
  }
});

export default server;
