const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'technology',
    {
        user_ID:{
            type:Sequelize.INTEGER
        },
        technology:{
            type:Sequelize.STRING
        }

    },
    {
        timestamp: false,
        freezeTableName: true
    }
)