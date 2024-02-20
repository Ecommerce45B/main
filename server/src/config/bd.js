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
  modelPedidoProducto,
} = sequelize.models;

//Category has many products.
Category.hasMany(Products, { foreignKey: "idCategory", as: "products" });
Products.belongsTo(Category, { foreignKey: "idCategory", as: "products" });

// User has one car and that car belongs to one specific user
User.hasOne(Car, { foreignKey: "idUser", as: "cars" });
Car.belongsTo(User, { foreignKey: "idUser", as: "cars" });

// User has a favorite list
User.hasOne(Favorite, { foreignKey: "userId", as: "favorite_list" });
Favorite.belongsTo(User, { foreignKey: "userId", as: "favorite_list" });

// One favorite list can have many products and products can to be in many favorite list
Favorite.belongsToMany(Products, { through: "favoriteProducts" });
Products.belongsToMany(Favorite, { through: "favoriteProducts" });

// Every car can have so much products and products can to be in every car created
Car.belongsToMany(Products, { through: "CartProduct", as: "shoppingCar" });
Products.belongsToMany(Car, { through: "CartProduct", as: "shoppingCar" });

// User has many orders
User.hasMany(Order, { foreignKey: "idUserOrder", as: "ordersList" });
Order.belongsTo(User, { foreignKey: "idUserOrder", as: "ordersList" });

//1:N -> User has many Location
User.hasMany(Location, { foreignKey: "idUser", as: "locations" });
Location.belongsTo(User, { foreignKey: "idUser", as: "locations" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
};
