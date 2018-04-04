const Sequelize = require('sequelize');
const sequelize = require('./sequelize')

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: Sequelize.STRING
    },
    prenom: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
//    createdat / updatedat sont crée de base dans la bdd
});

Users.sync()
module.exports = Users