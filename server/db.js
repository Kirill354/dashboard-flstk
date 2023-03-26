const { Sequelize } = require('sequelize');

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const NAME = process.env.DB_NAME;

const sequelize = new Sequelize(`postgres://${USER}:${PASSWORD}@${HOST}/${NAME}`);

module.exports = sequelize;
