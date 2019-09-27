const express = require("express")
const skills = express.Router()
const cors = require("cors")
skills.use(cors())

const skill_cont = require("../controllers/Skills")

// user add skill
skills.post('/skill', skill_cont.add_skill)
skills.post('/techno', skill_cont.add_technology)


//user update skill
skills.post('/updateSkill',skill_cont.update_skill)
skills.post('/updateTechnology',skill_cont.update_technology)

module.exports = skills