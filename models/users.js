// const Sequelize = require('sequelize');
// const sequelize = require('../util/database');

// //id, name , password, phone number, role

// const User = sequelize.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     name: Sequelize.STRING,
//     email: {
//        type:  Sequelize.STRING,
//        allowNull: false,
//        unique: true
//     },
//     password: Sequelize.STRING,
// })

// module.exports = User;
const {Sequelize} = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique : true
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User;