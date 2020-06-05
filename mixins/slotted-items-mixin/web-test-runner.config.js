const {
  createEsDevServer
} = require("web-test-runner/dist/implementations/servers/es-dev-server.js");

module.exports = {
  server: createEsDevServer({ preserveSymlinks: true }),
};
