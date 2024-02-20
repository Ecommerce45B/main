const { Categorias } = require('../config/bd');

// CREAR CATEGORIA
const createCategory = async (nombre, descripcion) => {
    try{
        const newCategory = await Categorias.create({
            nombre,
            descripcion
        })
        return newCategory
    } catch (error){
        return error.message
    }
}

//ACTUALIZAR CATEGORIA
const updateCategory = async (idCategoria, nombre, descripcion) => {
    try {
        const existingCategory= await Categorias.findByPk(idCategoria);

        if(!existingCategory) {
            throw new Error ('Categoria inexistente')
        }

        const upCategory = await Categorias.update({ nombre: nombre, descripcion: descripcion }, { where: { id: idCategoria } });
        return upCategory
    } catch(error) {
        return error.message
    }
}

//BORRAR CATEGORIA
const deleteCategory = async (id, sw) => {
    //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
    const data = await Categorias.findAll({ where: { id: id } })
    if (data.length === 0) {
        throw new Error(`El ID de la Categoria no existe ${id}`);
    }
    else {
        if (sw === 'true') {
            const category = await Categorias.destroy({ where: { id: id } })
        }
        else {
            const category = await Categorias.update({ estado: sw }, { where: { id: id } })
        }
    }
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory
}