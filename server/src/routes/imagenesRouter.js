const { Router } = require("express");
const {
  getImagenesHandler,
  newImagenHandler,
  deleteImagenHandler,
} = require("../handlers/imagenesHandler");

const ImagenRouter = Router();

ImagenRouter.get("/:id", getImagenesHandler);
ImagenRouter.post("/new", newImagenHandler);
ImagenRouter.delete("/delete/:id", deleteImagenHandler);

module.exports = ImagenRouter;
