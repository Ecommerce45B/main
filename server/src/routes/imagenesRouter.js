const { Router } = require("express");
const { getImagenesHandler, newImagenHandler, deleteImagenHandler } = require('../handlers/imagenesHandler');

const ImagenRouter = Router();

ImagenRouter.get("/:id"      , getImagenesHandler);
ImagenRouter.post("/new"     , newImagenHandler);
ImagenRouter.delete("/delete", deleteImagenHandler);

module.exports = ImagenRouter;