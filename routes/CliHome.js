const express = require("express")
const cli_home = express.Router()
const cors = require("cors")
cli_home.use(cors())

const cli_home_cont = require("../controllers/CliHome")

cli_home.get('/cli_home/webDeveloper',cli_home_cont.web_dev )
cli_home.get('/cli_home/mobDeveloper',cli_home_cont.mob_dev )
cli_home.get('/cli_home/dataDeveloper',cli_home_cont.data_sci )
cli_home.get('/cli_home/softDeveloper',cli_home_cont.sof_dev )
cli_home.get('/cli_home/blockDeveloper',cli_home_cont.block_chain )
cli_home.get('/cli_home/machineDeveloper',cli_home_cont.mach_learn )
cli_home.get('/cli_home/langDeveloper',cli_home_cont.nat_lang )
cli_home.get('/cli_home/digiMarkDeveloper',cli_home_cont.dig_mark )
cli_home.get('/cli_home/multiDeveloper',cli_home_cont.mul_des )
cli_home.get('/cli_home/robotDeveloper',cli_home_cont.robot )


cli_home.post('/cli_home/cli_getDeveloper',cli_home_cont.cli_get_dev)

cli_home.post('/cli_home/cli_getTechno',cli_home_cont.cli_get_techno)


module.exports = cli_home