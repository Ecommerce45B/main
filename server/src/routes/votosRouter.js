const { Router } = require("express");
const { getVotosIdUsuarioHandler,
        getVotoProductosHandler, 
        postNewVotosHandler 
      } = require('../handlers/votosHandler');

const votesRouter = Router();

votesRouter.get  ("/user/:id", getVotosIdUsuarioHandler);
votesRouter.get  ("/:id"     , getVotoProductosHandler);
votesRouter.post ("/new"     , postNewVotosHandler);

module.exports = votesRouter;