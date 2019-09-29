const express = require("express")
const chatList = express.Router()
const cors = require("cors")
const con_chatList = require("../controllers/chat_list")

chatList.post('/chat_list/checkfriend',con_chatList.checkFriend);
chatList.post('/chat_list/loadChatList',con_chatList.loadChatList);


chatList.use(cors())
module.exports = chatList