require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);
const PokemonModel = require('./models/Pokemon');
const TypesModel = require('./models/Types');
PokemonModel(sequelize)
TypesModel(sequelize)

const { pokemon,type } = sequelize.models;
pokemon.belongsToMany(type, {through: "pokemon_type"});
type.belongsToMany(pokemon, {through: "pokemon_type"});


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
