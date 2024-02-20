const { Fabricantes } = require('../config/bd');

//CREAR FABRICANTE
const createFabricante = async (nombre, descripcion) => {
    try{
        const newFabricante = await Fabricantes.create({
            nombre,
            descripcion
        })
        return newFabricante
    } catch (error){
        return error.message
    }
}

//ACTUALIZAR FABRICANTE
const updateFabricante = async (idFabricante, nombre, descripcion) => {
    try {
        const existingFabricante= await Fabricantes.findByPk(idFabricante);

        if(!existingFabricante) {
            throw new Error ('Fabricante inexistente')
        }

        const upFabricante = await Fabricantes.update({ nombre: nombre, descripcion: descripcion }, { where: { id: idFabricante } });
        return upFabricante
    } catch(error) {
        return error.message
    }
}

//BORRAR FABRICANTE
const deleteFabricante = async (id, sw) => {
    //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
    const data = await Fabricantes.findAll({ where: { id: id } })
    if (data.length === 0) {
        throw new Error(`El ID del producto no existe ${id}`);
    }
    else {
        if (sw === 'true') {
            const Fabricante = await Fabricantes.destroy({ where: { id: id } })
        }
        else {
            const Fabricante = await Fabricantes.update({ estado: sw }, { where: { id: id } })
        }
    }
}

module.exports = {
    createFabricante,
    updateFabricante,
    deleteFabricante
}