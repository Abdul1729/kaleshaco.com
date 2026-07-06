import landing from "./index.html";
import services from "./services.html";

const server = Bun.serve({
  routes: {
    "/": landing,
    "/services": services,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Listening on ${server.url}`);
