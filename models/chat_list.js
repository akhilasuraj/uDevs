const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'chat_list',
    {
        u_id:{
            type:Sequelize.INTEGER
        },
        friend_id:{
            type:Sequelize.INTEGER
        },
        count:{
            type:Sequelize.INTEGER
        }
       
    },
    {
        timestamp: false,
        freezeTableName: true
    }
)