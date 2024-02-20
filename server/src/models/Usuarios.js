const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Usuarios", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notNull: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      //Min 3 characters, at least one letter a-z, one number 0-9
      is: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/,
      notEmpty: true,
      len: [3, 30],
    },
  },
  avatar: {
    type: DataTypes.STRING(500),
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  dirFacturacion: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  dirEnvio: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    defaultValue: "0000000000",
    validate: {
      isPhoneNumberFormat(value) {
        if (!/^[0-9]{3,15}$/.test(value))
          throw Error("Invalid phone number format.");
      },
    },
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
    IdRol: {
      type: DataTypes.INTEGER,
      defaultValue: false,
    },
  });
};