require("dotenv").config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize } = require("sequelize");
const modelProductos      = require("../models/Productos.js");
const modelCategorias     = require("../models/Categorias.js");
const modelMarcas         = require("../models/Marcas.js");
const modelFabricantes    = require("../models/Car.js");
const modelImagenes       = require("../models/Imagenes.js");
const modelUsuarios       = require("../models/Usuarios.js");
const modelRoles          = require("../models/Roles.js");
const modelPedidos        = require("../models/Pedidos.js");
const modelPedidoProducto = require("../models/PedidoProducto.js");

const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
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
} = sequelize.models;

//Categorias tienen muchos productos
Categorias.hasMany(Productos, { foreignKey: "idCategoria", as: "productos" });
Productos.belongsTo(Categorias, { foreignKey: "idCategoria", as: "productos" });

//Marcas tienen muchos productos
Marcas.hasMany(Productos, { foreignKey: "idMarca", as: "productos" });
Productos.belongsTo(Marcas, { foreignKey: "idMarca", as: "productos" });

//Fabricantes tienen muchos productos
Fabricantes.hasMany(Productos, { foreignKey: "idFabricante", as: "productos" });
Productos.belongsTo(Fabricantes, { foreignKey: "idFabricante", as: "productos" });

//Productos tienen muchos imagenes
Productos.hasMany(Imagenes, { foreignKey: "idProducto", as: "imagenes" });
Imagenes.belongsTo(Productos, { foreignKey: "idProducto", as: "imagenes" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
};
