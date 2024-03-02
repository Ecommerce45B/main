const {
  viewImagenes,
  createImagen,
  deleteImagen,
} = require("../controllers/imagenesController");

// GET
const getImagenesHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await viewImagenes(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(`No se recuperaron las imágenes del producto`);
  }
};

// POST
const newImagenHandler = async (req, res) => {
  const { idProducto, url } = req.body;
  // {
  //     "url": "URL_DE_LA_IMAGEN",
  //     "idProducto": 3
  //   }

  try {
    const newImagen = await createImagen(idProducto, url);
    res.status(200).json(newImagen);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send(
        `No se pudo crear el registro de la imagen para el producto ${idProducto} ${url}`
      );
  }
};

// DELETE
const deleteImagenHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteImagen(id);
    res
      .status(200)
      .json({ message: `Imagen con ID ${id} borrada exitosamente` });
  } catch (error) {
    res.status(400).send(`No se pudo borrar la Imagen con id ${id}`);
  }
};

module.exports = {
  getImagenesHandler,
  newImagenHandler,
  deleteImagenHandler,
};
