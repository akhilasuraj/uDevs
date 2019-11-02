const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'dev_notification',
    {
        notification_ID:{
            type:Sequelize.INTEGER
        },
        client_ID:{
            type:Sequelize.INTEGER
        },
        project_ID:{
            type:Sequelize.INTEGER
        },
        type:{
            type:Sequelize.STRING
        },
        isViewed:{
            type:Sequelize.BOOLEAN
        },

    },
    {
        timestamp: false,
        freezeTableName: true
    }
)