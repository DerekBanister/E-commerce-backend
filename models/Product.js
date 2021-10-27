// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

//https://sequelize.org/v5/manual/data-types.html
//https://sequelize.org/master/variable/index.html#static-variable-DataTypes
//https://sequelize.org/v3/api/associations/

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      //making sure we get correct data type
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      //must be number
      validate: {
        isNumeric: true
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
