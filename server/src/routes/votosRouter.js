const { Router } = require("express");
const {
  getVotoProductosHandler,
  postNewVotosHandler,
  getVotoHandler,
  getVotosIdUsuarioHandler,
} = require("../handlers/votosHandler");

const votesRouter = Router();

votesRouter.get("/", getVotoHandler);
votesRouter.get("/user/:idUsuario", getVotosIdUsuarioHandler);
votesRouter.get("/producto/:idProducto", getVotoProductosHandler);
votesRouter.post("/new", postNewVotosHandler);

module.exports = votesRouter;
