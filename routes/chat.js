const express = require("express")
const Chat = express.Router()
const cors = require("cors")
const con_chat = require("../controllers/chat")


Chat.post('/Chat/loadMsgHis',con_chat.loadMsgHis)
Chat.post('/Chat/countMsgs',con_chat.countMsgs)
Chat.post('/Chat/updateIsViewed',con_chat.updateIsViewed)


Chat.use(cors())
module.exports = Chat