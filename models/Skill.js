const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'skill',
    {
        user_ID:{
            type:Sequelize.INTEGER
        },
        skill:{
            type:Sequelize.STRING
        }

    },
    {
        timestamp: false,
        freezeTableName: true
    }
)