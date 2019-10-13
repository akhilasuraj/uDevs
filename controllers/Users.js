const User = require("../models/User") 
const Skill = require("../models/Skill")
const Techno = require("../models/Technology")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

process.env.SECRET_KEY = 'secret'

const ImageData = {
    user_ID :0 ,
    image_name :'',
}


var smtpTransport = nodemailer.createTransport({

	host: "smtp.gmail.com",
	auth: {
		type: "login", // default
		user: "thushanlakshitha67@gmail.com",
		pass: "Thushan@1997"
	}
});

var rand, mailOptions, host, link;

exports.send_email = (req,res)=>{

    //rand = Math.floor((Math.random() * 100) + 54);

    var token = cryptr.encrypt(req.body.email)

    User.update({
        verify_key : token 
    },{
        where:{
            email : req.body.email
        }

    })
	link = "http://localhost:4200/verify?verifyKey=" + token;
	mailOptions = {
		to: req.body.email,
		subject: "Please confirm your Email account",
		html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function (error, response) {
		if (error) {
			console.log(error);
			res.send("error");
		} else {
			console.log("Message sent: " + response.message);
			res.send("sent");
		}
	});
}


exports.verify_email = (req,res)=>{

    User.findOne({
        where:{
            verify_key: req.body.verify_key,
        }
    })
    .then(user=>{
        if(user){
            User.update({
                isActivated : true
            },{
                where:{
                    email: cryptr.decrypt(req.body.verify_key)
                }
            
            })

            let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                expiresIn:1440
            })
            res.json({token:token})
            
        }else{

        }
    })
}



exports.cli_register=(req,res)=>{

    const userData = {
        first_name : req.body.first_name,
        last_name :req.body.last_name,
        user_type : "Client",
        email : req.body.email,
        password : cryptr.encrypt(req.body.password),
        gender : req.body.gender,
        contact_no : req.body.contact_no,
        profile_img: "default.png",
        isActivated : 0,
        verify_no : 0
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user=>{
        if(!user){
            User.create(userData)
            .then(user =>{
                let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.json({token:token,success:1})
            })
            .catch(err =>{
                res.send('error:'+err)
            })
        }else{
            res.send('User already exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.dev_register=(req,res)=>{

    const userData = {
        first_name : req.body.first_name,
        last_name :req.body.last_name,
        user_type : "Developer",
        email : req.body.email,
        password : cryptr.encrypt(req.body.password),
        gender : req.body.gender,
        contact_no : req.body.contact_no,
        profile_img: "default.png",
        isActivated : 0,
        verify_no : 0
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user=>{
        if(!user){
            User.create(userData)
            .then(user =>{
                let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.json({token:token,success:1})
            })
            .catch(err =>{
                res.send('error:'+err)
            })
        }else{
            res.send('User already exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.login=(req,res)=>{
    User.findOne({
        where:{
            email: req.body.email,
        }
    })
    .then(user =>{
        if(cryptr.decrypt(user.password)== req.body.password){
        
            if(user.isActivated == true){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                    expiresIn: 14400
                })
                res.json({ token: token,success:1,user})
            }else{
                res.send('You have been banned or you have not verify your email address')
            }
        }else{
            res.json({success: 0})
            res.send('Password incorrect')
        }
    
    })
    .catch(err =>{
        res.send('You have to register before login')
    })
}



exports.profile=(req,res)=>{
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        where : {
            id: decoded.id
        }
    })
    .then(user =>{
        if(user){
            res.json(user)
        }else{
            res.send('User does not exist')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.skill = (req,res)=>{
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Skill.findAll({
        where : {
            user_ID: decoded.id
        }
    })
    .then(skill =>{
        if(skill){
            res.json(skill)
        }else{
            res.send('Skill does not exist')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}

exports.technology = (req,res)=>{
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Techno.findAll({
        where : {
            user_ID: decoded.id
        }
    })
    .then(techno =>{
        if(techno){
            res.json(techno)
        }else{
            res.send('Technology does not exist')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.edit_profile=(req,res)=>{

    User.update({
        first_name : req.body.first_name,
        last_name :req.body.last_name,
        user_type : req.body.user_type,
        email : req.body.email,
        password : req.body.password,
        gender : req.body.gender,
        contact_no : req.body.contact_no,
        isActivated: req.body.isActivated
    },{
        where:{
            id:req.body.id
        }
    })

   User.findOne({
        where:{
            email: req.body.email,
            password: req.body.password
        }
    })
    .then(user=>{
        let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
            expiresIn:1440
        })
        res.json({token:token})
    })
    .catch(err =>{
        res.send('error:'+err)
    })

}