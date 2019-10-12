const express = require("express")
const conf_pro = express.Router()
const cors = require("cors")
conf_pro.use(cors())

const conf_pro_cont = require("../controllers/Confirmed_projects")

conf_pro.post('/project/acceptPro', conf_pro_cont.accept_project)

conf_pro.get('/devPro/fix_cur_pro',conf_pro_cont.fix_cur_pro)
conf_pro.get('/devPro/bid_cur_pro',conf_pro_cont.bid_cur_pro)
conf_pro.get('/devPro/rec_cur_pro',conf_pro_cont.rec_cur_pro)

conf_pro.get('/devPro/fix_con_pro',conf_pro_cont.fix_con_pro)
conf_pro.get('/devPro/bid_con_pro',conf_pro_cont.bid_con_pro)
conf_pro.get('/devPro/rec_con_pro',conf_pro_cont.rec_con_pro)

conf_pro.get('/devPro/fix_com_pro',conf_pro_cont.fix_com_pro)
conf_pro.get('/devPro/bid_com_pro',conf_pro_cont.bid_com_pro)
conf_pro.get('/devPro/rec_com_pro',conf_pro_cont.rec_com_pro)

conf_pro.post('/devPro/view_fix_pro',conf_pro_cont.view_fix_pro)
conf_pro.post('/devPro/view_bid_pro',conf_pro_cont.view_bid_pro)
conf_pro.post('/devPro/view_rec_pro',conf_pro_cont.view_rec_pro)

module.exports = conf_pro