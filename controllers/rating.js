const rating = require('../models/rating')
const user = require('../models/User')
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