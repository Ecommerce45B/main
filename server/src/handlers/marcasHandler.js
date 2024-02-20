const { viewMarcas, createMarca, updateMarca, deleteMarca } = require('../controllers/marcasController');

const getMarcasHandler = async (req, res) => {
    try {
        const response = await viewMarcas()
        res.status(200).json(response)
    }
    catch (error) {
        res.status(400).send(`No se pudo recuperar información de las Categorias`);
    }
}

// POST 
const newMarcaHandler= async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const newMarca = await createMarca(nombre, descripcion)
        res.status(200).json(newMarca)
    } catch (error) {
        // console.log(error);
        res.status(400).send(`No se pudo crear el registro de la categoria ${nombre} ${descripcion}`)
    }
}

// UPDATE 
const updateMarcaHandler= async (req, res) => {
    const { id, nombre, descripcion, estado } = req.body;
    try {
        const newMarca = await updateMarca(id, nombre, descripcion, estado)
        res.status(200).json(newMarca)
    } catch (error) {
        // console.log(error);
        res.status(400).send(`No se pudo actualizar la categoria ${nombre} ${descripcion}`)
    }
}

// DELETE 
const deleteMarcaHandler= async (req, res) => {
    const { id, sw } = req.body;
    try {
        const delMarca = await deleteMarca(id, sw)
        res.status(200).json(delMarca)
    } catch (error) {
        // console.log(error);
        res.status(400).send(`No se pudo borrar la categoria con id ${id}`)
    }
}

export default {
    getMarcasHandler,
    newMarcaHandler,
    updateMarcaHandler,
    deleteMarcaHandler
}