const rating = require('../models/rating')
const user = require('../models/User')
const cliFeedback = require('../models/cli_feedback')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
//newRating
exports.rateUser = (req,res)=>{

    rating.findOne({

        where : {
            dev_Id : req.body.dev_Id
        }
    }).then(result =>{
         rating.update({
            total_rating : Number(result.total_rating)+Number(req.body.rating),
            rated_times : result.rated_times+1
         },{
             where :{
                 dev_id : req.body.dev_Id
             }
         }).then(res=>{
            console.log((Number(result.total_rating)+Number(req.body.rating))/(Number(result.rated_times)+1))
            user.update({
                rating : (Number(result.total_rating)+Number(req.body.rating))/(Number(result.rated_times)+1)
            },{
                where :{
                    id : req.body.dev_Id
                }
            })
         })
         
         res.send('1');
    }).catch(err=>{
        res.send(err);
    })


}


exports.sendFeedback = (req,res)=>{

    feedbackData = {
        project_ID: req.body.project_ID,
        client_ID: req.body.client_ID,
        developer_ID: req.body.developer_ID,
        feedback: req.body.editorData
    }

    cliFeedback.create(feedbackData)
    .then(feedback=>{
        res.json({success:1})
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}