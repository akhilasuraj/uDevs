const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'cli_notification',
    {
        notification_ID:{
            type:Sequelize.INTEGER
        },
        developer_ID:{
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