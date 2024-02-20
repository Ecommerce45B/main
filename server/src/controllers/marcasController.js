const { Marcas } = require('../config/bd');

// VER MARCAS
const viewMarcas = async () => {
    try{
        const listMarcas = await Marcas.findAll()
        return [...listMarcas]
    } catch (error){
        return error.message
    }
}

// CREAR MARCA
const createMarca = async (nombre, descripcion) => {
    try{
        const newMarca = await Marcas.create({
            nombre,
            descripcion
        })
        return newMarca
    } catch (error){
        return error.message
    }
}

//ACTUALIZAR MARCA
const updateMarca = async (id, nombre, descripcion, estado) => {
    try {
        const existingMarca= await Marcas.findByPk(id);

        if(!existingMarca) {
            throw new Error ('Marca inexistente')
        }

        const upMarca = await Marcas.update({ nombre: nombre, descripcion: descripcion, estado:estado }, { where: { id: id } });
        return upMarca
    } catch(error) {
        return error.message
    }
}

//BORRAR MARCA
const deleteMarca = async (id, sw) => {
    //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
    const data = await Marcas.findAll({ where: { id: id } })
    if (data.length === 0) {
        throw new Error(`El ID de la Marca no existe ${id}`);
    }
    else {
        if (sw === 'true') {
            const Marcas = await Marcas.destroy({ where: { id: id } })
        }
        else {
            const Marcas = await Marcas.update({ estado: sw }, { where: { id: id } })
        }
    }
}

module.exports = {
    viewMarcas,
    createMarca,
    updateMarca,
    deleteMarca
}