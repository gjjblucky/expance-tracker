const Sequelize = require('sequelize')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodetutorial',
//     password: 'apple@17'
// });

const sequelize = new Sequelize('expensetracker', 'root', 'K@ngriya007',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;