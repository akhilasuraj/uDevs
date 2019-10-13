const Project = require("../models/Project")
const User = require("../models/User")
const Bid = require("../models/Bid")
const Image = require("../models/Image")

exports.web_pro = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Web development',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}

exports.mob_pro = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Mobile development',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.data_sci = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Data science',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.sof_dev = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Software development',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.block_chain = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Block chain',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.mach_learn = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Machine learning',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.nat_lang = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Natural language processing',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.dig_mark = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Digital marketing',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.mul_des = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Multimedia designing',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.robot = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Robotics',
            isShowed: true
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.get_pro = (req,res)=>{
    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findOne({
        where: {
            id: req.body.project_ID,
        }, include:[{model:User},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.get_client = (req,res)=>{

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    User.findOne({
        where: {
            id: req.body.client_ID
        },include:{model:Image}
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('Client does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.get_bid = (req,res)=>{
    Bid.findOne({
        where:{
            project_ID : req.body.project_ID
        }
    })
    .then(bid=>{
        if(bid){
            res.json(bid)
        }else{
            res.json('bid does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}