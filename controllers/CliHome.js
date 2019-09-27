const Project = require("../models/Project")
const User = require("../models/User")
const Skill =require("../models/Skill")
const Techno =require("../models/Technology")

const Sequelize = require("sequelize")
const Op = Sequelize.Op

exports.web_dev = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Web development'
        }, include:[{model:User}]
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('user does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.cli_get_dev = (req,res)=>{

   User.findOne({
        where: {
           id: req.body.user_ID
        }
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('user does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}

exports.cli_get_techno = (req,res)=>{

    User.findOne({
         where: {
            id: req.body.user_ID
         }
     })
     .then(user=>{
         if(user){
             res.json(user)
         }else{
             res.send('user does not exists')
         }
     })
     .catch(err =>{
         res.send('error:'+err)
     })
 }


