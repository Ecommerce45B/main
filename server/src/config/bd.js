require("dotenv").config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize } = require("sequelize");

const modelProductos = require("../models/Productos.js");
const modelCategorias = require("../models/Categorias.js");
const modelMarcas = require("../models/Marcas.js");
const modelFabricantes = require("../models/Fabricantes.js");
const modelImagenes = require("../models/Imagenes.js");
const modelUsuarios = require("../models/Usuarios.js");
const modelRoles = require("../models/Roles.js");
const modelPedidos = require("../models/Pedidos.js");
const modelPedidoProducto = require("../models/PedidoProducto.js");
const modelVotos          = require("../models/votos.js")

const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
  {
    logging: false,
    native: false,
  }
);

modelProductos(sequelize);
modelCategorias(sequelize);
modelMarcas(sequelize);
modelFabricantes(sequelize);
modelImagenes(sequelize);
modelUsuarios(sequelize);
modelRoles(sequelize);
modelPedidos(sequelize);
modelPedidoProducto(sequelize);
modelVotos(sequelize);

const {
  Productos,
  Categorias,
  Marcas,
  Fabricantes,
  Imagenes,
  Usuarios,
  Roles,
  Pedidos,
  PedidoProducto,
  Votos,
} = sequelize.models;

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
};
