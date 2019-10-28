const express = require("express")
const rating = express.Router()
const cors = require("cors")
const con_rating = require('../controllers/rating');

rating.post('/rating/rateUser',con_rating.rateUser)

rating.post('/rating/giveFeedback', con_rating.sendFeedback)


rating.use(cors())
module.exports = rating