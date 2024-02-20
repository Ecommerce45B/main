//const axios      = require('axios')
const { Productos } = require('../config/bd')
// const url = `http://localhost:3001/products`;
const Sequelize = require('sequelize');

const getAllProducts = async () => {
    const productsDB = await Productos.findAll()
    return [...productsDB]
}

const getProductsById = async (id) => {
    // console.log("id al controller---> ", id);
    const productsDB = await Productos.findAll({ where: { id: id } });
    return [...productsDB];
}

const getProductsByName = async (nombre) => {
    const bddProducts = await Productos.findAll({
        where: {
            name: {
                [Sequelize.Op.iLike]: `%${nombre}%`,
            }
        }
    });

    console.log(bddProducts);

    return bddProducts;
};

const postNewProducts = async (
    nombre,
    descripcion,
    especificaciones,
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
) => {
    const data = await Productos.findAll({ where: { nroserie: nroserie } })
    if (data.length > 0) {
        throw new Error(`Ya existe un producto con el nro. Serie: ${nroserie}`);
    }
    else {
        const newProducts = await Productos.create(
            {
                nombre,
                descripcion,
                especificaciones,
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
            })
        return [newProducts];
    }
}

const changeProducts = async ({id, nombre, descripcion, especificaciones, nroserie, nromac, precio, stock, minimo, preferencia, estado, idCategoria, idMarca, idFabricante}) => {
    console.log(id);
    try {
        const product = await Productos.findByPk(id);
        if (!product) {
            throw new Error(`El ID del producto no existe: ${id}`);
        }

        const updatedProduct = await Productos.update({
            nombre, descripcion, especificaciones, nroserie, nromac, precio, stock, minimo, preferencia, estado, idCategoria, idMarca, idFabricante
        });
        return updatedProduct;
    } catch (error) {
        throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
}


const deleteProducts = async (id, sw) => {
    //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
    const data = await Productos.findAll({ where: { id: id } })
    if (data.length === 0) {
        throw new Error(`El ID del producto no existe ${id}`);
    }
    else {
        if (sw === 'true') {
            const product = await Productos.destroy({ where: { id: id } })
        }
        else {
            const product = await Productos.update({ estado: sw }, { where: { id: id } })
        }
    }
}

const changeProductStock = async ({ id, stock }) => {
    try {
      const product = await Productos.findByPk(id);
      if (!product) {
        throw new Error(`El ID del producto no existe: ${id}`);
      }
  
      const updatedProduct = await Productos.update({
        stock: stock
      });
  
      return updatedProduct;
    } catch (error) {
      throw new Error(`Error al actualizar el stock del producto: ${error.message}`);
    }
  };

module.exports = {
    getAllProducts,
    getProductsById,
    getProductsByName,
    postNewProducts,
    changeProducts,
    deleteProducts,
    changeProductStock
}