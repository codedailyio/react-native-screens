const next = require("next");
const Hapi = require("hapi");
const { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } = require("./next-wrapper");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const server = new Hapi.Server({
  port,
});

app.prepare().then(async () => {
  server.route({
    method: "GET",
    path: "/screen/{id}/{slug}",
    handler: pathWrapper(app, "/screen"),
  });

  server.route({
    method: "GET",
    path: "/collections",
    handler: pathWrapper(app, "/collections"),
  });

  server.route({
    method: "GET",
    path: "/collections/{id}/{slug}",
    handler: pathWrapper(app, "/collection"),
  });

  server.route({
    method: "GET",
    path: "/_next/{p*}" /* next specific routes */,
    handler: nextHandlerWrapper(app),
  });

  server.route({
    method: "GET",
    path: "/{p*}" /* catch all route */,
    handler: nextHandlerWrapper(app),
  });

  try {
    await server.start();
    console.log(`> Ready on http://localhost:${port}`);
  } catch (error) {
    console.log("Error starting server");
    console.log(error);
  }
});
