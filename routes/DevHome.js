const express = require("express")
const dev_home = express.Router()
const cors = require("cors")
dev_home.use(cors())

const dev_home_cont = require("../controllers/DevHome")

//dev home Project
dev_home.get('/dev_home/webProject', dev_home_cont.web_pro)
dev_home.get('/dev_home/mobProject', dev_home_cont.mob_pro)
dev_home.get('/dev_home/dataProject', dev_home_cont.data_sci)
dev_home.get('/dev_home/softProject', dev_home_cont.sof_dev)
dev_home.get('/dev_home/blockchain', dev_home_cont.block_chain)
dev_home.get('/dev_home/machlearn', dev_home_cont.mach_learn)
dev_home.get('/dev_home/natlang', dev_home_cont.nat_lang)
dev_home.get('/dev_home/digimark', dev_home_cont.dig_mark)
dev_home.get('/dev_home/multiDesign', dev_home_cont.mul_des)
dev_home.get('/dev_home/robot', dev_home_cont.robot)



//dev home get project
dev_home.post('/dev_home/dev_getProject', dev_home_cont.get_pro)

//dev home get client
dev_home.post('/dev_home/dev_getClient', dev_home_cont.get_client)

//dev home get bid
dev_home.post('/dev_home/dev_getBid', dev_home_cont.get_bid)

module.exports = dev_home