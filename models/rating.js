const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'rating',
    {
        dev_Id:{
            type:Sequelize.INTEGER
        },
        total_rating:{
            type:Sequelize.INTEGER
        },
        rated_times:{
            type:Sequelize.INTEGER
        }
    },
    {
        timestamp: false,
        freezeTableName: true
    }
)