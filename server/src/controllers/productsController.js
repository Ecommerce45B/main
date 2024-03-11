const {
  Productos,
  Imagenes,
  Categorias,
  Marcas,
  Fabricantes,
  Votos,
} = require("../config/bd");
const { Sequelize } = require("sequelize");

const getAllProducts = async () => {
  try {
    const products = await Productos.findAll({
      include: [
        { model: Imagenes },
        { model: Categorias },
        { model: Marcas },
        { model: Fabricantes },
        { model: Votos },
      ],
      attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
    });

    products.forEach((product) => {
      if (product.Categoria && !product.Categoria.estado) {
        product.Categoria.nombre = "Categoría inactiva";
      }
      if (product.Marca && !product.Marca.estado) {
        product.Marca.nombre = "Marca inactiva";
      }
      if (product.Fabricante && !product.Fabricante.estado) {
        product.Fabricante.nombre = "Fabricante inactivo";
      }
    });
    products.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    return products;
  } catch (error) {
    throw new Error("Error al obtener todos los productos: " + error.message);
  }
};

const getProductsById = async (id) => {
  const product = await Productos.findOne({
    where: { id: id },
    include: [
      { model: Imagenes },
      { model: Categorias },
      { model: Marcas },
      { model: Fabricantes },
    ],
    attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
  });
  return product;
};
  const product = await Productos.findOne({
    where: { id: id },
    include: [
      { model: Imagenes },
      { model: Categorias },
      { model: Marcas },
      { model: Fabricantes },
    ],
    attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
  });
  return product;
};

const getProductsByName = async (nombre) => {
  const bddProducts = await Productos.findAll({
    where: {
      [Sequelize.Op.or]: [
        {
          nombre: {
            [Sequelize.Op.iLike]: `%${nombre}%`,
          },
        },
        {
          descripcion: {
            [Sequelize.Op.iLike]: `%${nombre}%`,
          },
        },
      ],
    },
    include: [
      { model: Imagenes },
      { model: Categorias },
      { model: Marcas },
      { model: Fabricantes },
    ],
    attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
  });
  const bddProducts = await Productos.findAll({
    where: {
      [Sequelize.Op.or]: [
        {
          nombre: {
            [Sequelize.Op.iLike]: `%${nombre}%`,
          },
        },
        {
          descripcion: {
            [Sequelize.Op.iLike]: `%${nombre}%`,
          },
        },
      ],
    },
    include: [
      { model: Imagenes },
      { model: Categorias },
      { model: Marcas },
      { model: Fabricantes },
    ],
    attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
  });

  return bddProducts;
  return bddProducts;
};

const postNewProducts = async (
  nombre,
  descripcion,
  especificaciones,
  //imagen,
  nroserie,
  nromac,
  precio,
  stock,
  minimo,
  preferencia,
  estado,
  idCategoria,
  idMarca,
  idFabricante
  //imagenes
  nombre,
  descripcion,
  especificaciones,
  //imagen,
  nroserie,
  nromac,
  precio,
  stock,
  minimo,
  preferencia,
  estado,
  idCategoria,
  idMarca,
  idFabricante
  //imagenes
) => {
  try {
    console.log("Buscando productos con el número de serie:", nroserie);
    const existingProduct = await Productos.findOne({
      where: { nroserie: nroserie },
    });
    if (existingProduct) {
      throw new Error(`Ya existe un producto con el nro. Serie: ${nroserie}`);
    } else {
      const maxIdProduct = await Productos.max("id");

      const newProductId = maxIdProduct ? maxIdProduct + 1 : 1;

      const newProduct = await Productos.create({
        id: newProductId,
        nombre,
        descripcion,
        especificaciones,
        // imagen,
        nroserie,
        nromac,
        precio,
        stock,
        minimo,
        preferencia,
        estado,
        idCategoria,
        idMarca,
        idFabricante,
      });

      // await Promise.all(
      //   imagenes.map(async (imagen) => {
      //     await Imagenes.create({ ...imagen, idProducto: newProduct.id });
      //   })
      // );
      const productWithAssociations = await Productos.findByPk(newProduct.id, {
        include: [
          //{ model: Imagenes },
          { model: Categorias },
          { model: Marcas },
          { model: Fabricantes },
        ],
        attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
      });

      return productWithAssociations;
    }
  } catch (error) {
    console.error("Error al crear un nuevo producto:", error);
    throw error;
  }
};

const changeProducts = async (id, productData) => {
  try {
    const existingProduct = await Productos.findByPk(id, {
      include: [
        { model: Imagenes },
        { model: Categorias },
        { model: Marcas },
        { model: Fabricantes },
      ],
      attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
    });

    if (!existingProduct) {
      throw new Error(`El ID del producto no existe: ${id}`);
    }
  try {
    console.log("Buscando productos con el número de serie:", nroserie);
    const existingProduct = await Productos.findOne({
      where: { nroserie: nroserie },
    });
    if (existingProduct) {
      throw new Error(`Ya existe un producto con el nro. Serie: ${nroserie}`);
    } else {
      const maxIdProduct = await Productos.max("id");

      const newProductId = maxIdProduct ? maxIdProduct + 1 : 1;

      const newProduct = await Productos.create({
        id: newProductId,
        nombre,
        descripcion,
        especificaciones,
        // imagen,
        nroserie,
        nromac,
        precio,
        stock,
        minimo,
        preferencia,
        estado,
        idCategoria,
        idMarca,
        idFabricante,
      });

      // await Promise.all(
      //   imagenes.map(async (imagen) => {
      //     await Imagenes.create({ ...imagen, idProducto: newProduct.id });
      //   })
      // );
      const productWithAssociations = await Productos.findByPk(newProduct.id, {
        include: [
          //{ model: Imagenes },
          { model: Categorias },
          { model: Marcas },
          { model: Fabricantes },
        ],
        attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
      });

      return productWithAssociations;
    }
  } catch (error) {
    console.error("Error al crear un nuevo producto:", error);
    throw error;
  }
};

const changeProducts = async (id, productData) => {
  try {
    const existingProduct = await Productos.findByPk(id, {
      include: [
        { model: Imagenes },
        { model: Categorias },
        { model: Marcas },
        { model: Fabricantes },
      ],
      attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
    });

    if (!existingProduct) {
      throw new Error(`El ID del producto no existe: ${id}`);
    }

    await existingProduct.update(productData);

    if (productData.imagenes && Array.isArray(productData.imagenes)) {
      await Promise.all(
        productData.imagenes.map(async (imagen) => {
          await Imagenes.create({ ...imagen, idProducto: id });
        })
      );
    }

    const updatedProduct = await Productos.findByPk(id, {
      include: [
        { model: Imagenes },
        { model: Categorias },
        { model: Marcas },
        { model: Fabricantes },
      ],
      attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
    });

    return updatedProduct;
  } catch (error) {
    throw new Error(`Error al actualizar el producto: ${error.message}`);
  }
};
    await existingProduct.update(productData);

    if (productData.imagenes && Array.isArray(productData.imagenes)) {
      await Promise.all(
        productData.imagenes.map(async (imagen) => {
          await Imagenes.create({ ...imagen, idProducto: id });
        })
      );
    }

    const updatedProduct = await Productos.findByPk(id, {
      include: [
        { model: Imagenes },
        { model: Categorias },
        { model: Marcas },
        { model: Fabricantes },
      ],
      attributes: { exclude: ["idCategoria", "idMarca", "idFabricante"] },
    });

    return updatedProduct;
  } catch (error) {
    throw new Error(`Error al actualizar el producto: ${error.message}`);
  }
};

const deleteProducts = async (id, sw) => {
  //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
  try {
    const product = await Productos.findByPk(id);

    if (!product) {
      throw new Error(`El ID del producto no existe ${id}`);
  //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
  try {
    const product = await Productos.findByPk(id);

    if (!product) {
      throw new Error(`El ID del producto no existe ${id}`);
    }

    if (sw === "true") {
      await product.update({ estado: false });
    } else if (sw === "false") {
      await product.update({ estado: true });
    } else {
      throw new Error("El parámetro 'sw' debe ser 'true' o 'false'.");
    }

    return { message: "Producto actualizado correctamente" };
  } catch (error) {
    throw new Error(
      `No se pudo actualizar la información del producto con id ${id}: ${error.message}`
    );
  }
};

    if (sw === "true") {
      await product.update({ estado: false });
    } else if (sw === "false") {
      await product.update({ estado: true });
    } else {
      throw new Error("El parámetro 'sw' debe ser 'true' o 'false'.");
    }

    return { message: "Producto actualizado correctamente" };
  } catch (error) {
    throw new Error(
      `No se pudo actualizar la información del producto con id ${id}: ${error.message}`
    );
  }
};

const changeProductStock = async ({ id, stock }) => {
  try {
    const product = await Productos.findByPk(id);
    if (!product) {
      throw new Error(`El ID del producto no existe: ${id}`);
    }

    await product.update({ stock: stock });

    return product;
  } catch (error) {
    throw new Error(
      `Error al actualizar el stock del producto: ${error.message}`
    );
  }
};

const changeProductRating = async ({ id, rating }) => {
  try {
    const product = await Productos.findByPk(id);
    if (!product) {
      throw new Error(`El ID del producto no existe: ${id}`);
    }

    await product.update({ rating: rating });

    return product;
  } catch (error) {
    throw new Error(
      `Error al actualizar el Rating del producto: ${error.message}`
    );
  }
};
  try {
    const product = await Productos.findByPk(id);
    if (!product) {
      throw new Error(`El ID del producto no existe: ${id}`);
    }

    await product.update({ stock: stock });

    return product;
  } catch (error) {
    throw new Error(
      `Error al actualizar el stock del producto: ${error.message}`
    );
  }
};

const changeProductRating = async ({ id, rating }) => {
  try {
    const product = await Productos.findByPk(id);
    if (!product) {
      throw new Error(`El ID del producto no existe: ${id}`);
    }

    await product.update({ rating: rating });

    return product;
  } catch (error) {
    throw new Error(
      `Error al actualizar el Rating del producto: ${error.message}`
    );
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
  getProductsByName,
  postNewProducts,
  changeProducts,
  deleteProducts,
  changeProductStock,
  changeProductRating
};

  getAllProducts,
  getProductsById,
  getProductsByName,
  postNewProducts,
  changeProducts,
  deleteProducts,
  changeProductStock,
  changeProductRating
};
