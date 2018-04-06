const Sequelize = require('sequelize');
const sequelize = require('./sequelize')

const Images = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {          // deemo.jpg
        type: Sequelize.STRING
    },
    iduser: {
        type: Sequelize.INTEGER
    },
    tags: {          // deemo.jpg
        type: Sequelize.STRING
    }
//    createdat / updatedat sont crée de base dans la bdd
});

Images.sync()
module.exports = Images