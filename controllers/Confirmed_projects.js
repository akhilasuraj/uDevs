const Confirmed_project = require("../models/Confirmed_project")
const Request_project = require("../models/Request_project")
const Bid_response = require("../models/Bid_response")
const Request_developer = require("../models/Request_developer")
const Project = require("../models/Project")
const User = require("../models/User")
const jwt = require("jsonwebtoken")

process.env.SECRET_KEY = 'secret'

exports.accept_project = (req,res) =>{

    const confirm_details = {
        developer_ID : req.body.developer_ID,
        project_ID: req.body.project_ID,
        category: req.body.category,
        isCompleted: false
    }

    Confirmed_project.create(confirm_details)
    .then(details =>{
        res.send(details)
    })

    if(req.body.category == 'bid'){
        Bid_response.update({
            isViewed: true,
            isAccepted: true
        },{
            where:{
                developer_ID: req.body.developer_ID,
                project_ID: req.body.project_ID
            }
        })
    }else{
        Request_project.update({
            isViewed: true,
            isAccepted: true
        },{
            where:{
                developer_ID: req.body.developer_ID,
                project_ID: req.body.project_ID
            }
        })
    }

    Project.update({
        isShowed: false
    },{
        where:{
            id: req.body.project_ID
        }
    })

}



exports.fix_cur_pro = (req,res) =>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Request_project.findAll({
        where:{
            developer_ID:decoded.id,
            isAccepted: false
        },include:[{
            model:Project,
            include:[{model:User}]
        }]
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })


}


exports.bid_cur_pro = (req,res) =>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.hasMany(Bid_response,{foreignKey: 'project_ID'})
    Bid_response.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Bid_response.findAll({
        where:{
            developer_ID:decoded.id,
            isAccepted: false
        },include:[{
            model:Project,
            include:[{model:User}]
        }]
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })


}


exports.rec_cur_pro = (req,res) =>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Request_developer.findAll({
        where:{
            developer_ID:decoded.id,
            isAccepted: false
        },include:[{
            model:Project,
            include:[{model:User}]
        }]
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })


}



exports.fix_con_pro = (req,res) =>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Confirmed_project,{foreignKey: 'project_ID'})
    Confirmed_project.belongsTo(Project,{foreignKey:'project_ID'})

    Request_project.findAll({
        where:{
            developer_ID:decoded.id,
            isAccepted: true
        },include:[{
            model:Project,
            include:[{
                model:Confirmed_project
            },{model:User}]
        }]
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })


}



exports.bid_con_pro = (req,res) =>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.hasMany(Bid_response,{foreignKey: 'project_ID'})
    Bid_response.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Confirmed_project,{foreignKey: 'project_ID'})
    Confirmed_project.belongsTo(Project,{foreignKey:'project_ID'})

    Bid_response.findAll({
        where:{
            developer_ID:decoded.id,
            isAccepted: true
        },include:[{
            model:Project,
            include:[{model:User},{
                model:Confirmed_project,
            }]
        }]
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })


}


exports.rec_con_pro = (req,res) =>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Confirmed_project,{foreignKey: 'project_ID'})
    Confirmed_project.belongsTo(Project,{foreignKey:'project_ID'})

    Request_developer.findAll({
        where:{
            developer_ID:decoded.id,
            isAccepted: true
        },include:[{
            model:Project,
            include:[{model:User},{
                model:Confirmed_project
            }]
        }]
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })


}


exports.fix_com_pro = (req,res) =>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Confirmed_project,{foreignKey: 'project_ID'})
    Confirmed_project.belongsTo(Project,{foreignKey:'project_ID'})

    Request_project.findAll({
        where:{
            developer_ID:decoded.id,
            isAccepted: true
        },include:[{
            model:Project,
            include:[{model:User},{
                model:Confirmed_project
            }]
        }]
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })


}



exports.bid_com_pro = (req,res) =>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.hasMany(Bid_response,{foreignKey: 'project_ID'})
    Bid_response.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Confirmed_project,{foreignKey: 'project_ID'})
    Confirmed_project.belongsTo(Project,{foreignKey:'project_ID'})

    Bid_response.findAll({
        where:{
            developer_ID:decoded.id,
            isAccepted: true
        },include:[{
            model:Project,
            include:[{model:User},{
                model:Confirmed_project
            }]
        }]
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })


}


exports.rec_com_pro = (req,res) =>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasOne(Confirmed_project,{foreignKey: 'project_ID'})
    Confirmed_project.belongsTo(Project,{foreignKey:'project_ID'})

    Request_developer.findAll({
        where:{
            developer_ID:decoded.id,
            isAccepted: true
        },include:[{
            model:Project,
            include:[{model:User},{
                model:Confirmed_project
            }]
        }]
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })


}