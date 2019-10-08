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


exports.mob_dev = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Mobile development'
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


exports.data_sci = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Data science'
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


exports.sof_dev = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Software development'
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


exports.block_chain = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Block chain'
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


exports.mach_learn = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Machine learning'
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


exports.nat_lang = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Natural language processing'
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


exports.dig_mark = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Digital marketing'
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


exports.mul_des = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Multimedia designing'
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


exports.robot = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           skill: 'Robotics'
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

    Techno.findAll({
         where: {
            user_ID: req.body.user_ID
         }
     })
     .then(techno=>{
         if(techno){
             res.json(techno)
         }else{
             res.send('Technologies does not exists')
         }
     })
     .catch(err =>{
         res.send('error:'+err)
     })
 }


