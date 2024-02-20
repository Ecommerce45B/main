const { viewCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

// GET
const getCategoryHandler = async (req, res) => {
    try {
        const response = await viewCategory()
        res.status(200).json(response)
    }
    catch (error) {
        res.status(400).send(`No se pudo recuperar información de las Categorias`);
    }
}

// POST 
const newCategoryHandler= async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const newCategory = await createCategory(nombre, descripcion)
        res.status(200).json(newCategory)
    } catch (error) {
        // console.log(error);
        res.status(400).send(`No se pudo crear el registro de la categoria ${nombre} ${descripcion}`)
    }
}

// UPDATE 
const updateCategoryHandler= async (req, res) => {
    const { id, nombre, descripcion, estado } = req.body;
    try {
        const newCategory = await updateCategory(id, nombre, descripcion, estado)
        res.status(200).json(newCategory)
    } catch (error) {
        // console.log(error);
        res.status(400).send(`No se pudo actualizar la categoria ${nombre} ${descripcion}`)
    }
}

// DELETE 
const deleteCategoryHandler= async (req, res) => {
    const { id, sw } = req.body;
    try {
        const delCategory = await deleteCategory(id, sw)
        res.status(200).json(delCategory)
    } catch (error) {
        // console.log(error);
        res.status(400).send(`No se pudo borrar la categoria con id ${id}`)
    }
}

module.exports = {
    getCategoryHandler,
    newCategoryHandler,
    updateCategoryHandler,
    deleteCategoryHandler
}