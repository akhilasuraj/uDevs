const chatList = require("../models/chat_list")
const tUser = require("../models/User")
const Sequelize = require('sequelize')
const chat = require("../models/chat")
const Op = Sequelize.Op;


exports.checkFriend = (req,res) => {
    console.log("chekkkk"+req.body.u_id+req.body.friend_id);
    const newF = {
          u_id : req.body.u_id,
          friend_id : req.body.friend_id
    }
    const newF2 = {
        u_id :  req.body.friend_id,
        friend_id : req.body.u_id
  }
//1
    chatList.findOne({
        where :{
           [Op.and]:[{ u_id : req.body.u_id},{ friend_id : req.body.friend_id}]} 
    }).then(result=>{
        if(result==null){
            chatList.create(newF);
            console.log('added new friend1');
        }else{
            console.log('found friend..')
        }
    }).catch(err =>{
        res.send('Error:'+err);
   })
   //2
   chatList.findOne({
    where :{
       [Op.and]:[{ u_id :req.body.friend_id},{ friend_id : req.body.u_id}]} 
}).then(result=>{
    if(result==null){
        chatList.create(newF2);
        console.log('added new friend2');
    }else{
        console.log('found friend..')
    }
}).catch(err =>{
    res.send('Error:'+err);
})
}

exports.loadChatList = (req,res)=>{

    tUser.hasMany(chatList,{foreignKey:'friend_id'})
    chatList.belongsTo(tUser,{foreignKey:'friend_id'})

    chatList.findAll({
       
        where:{
           u_id: req.body.userId      
        }, order:[['updatedAt','DESC']],
        include:[{
            model:tUser,
            attributes:['id','first_name','last_name','email','profile_img'],
        }],
       

    }).then(result=>{
        res.json(result)
    })
}