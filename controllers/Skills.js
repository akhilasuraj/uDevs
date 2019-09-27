const Skill = require("../models/Skill")
const Technology = require("../models/Technology")


exports.add_skill = (req, res) => {

    for (i = 0; i < req.body.data.length; i++) {

        skill = {
            user_ID: req.body.user_ID,
            skill: req.body.data[i]
        }

        Skill.create(skill)

    }

    if (req.body.other_skills != '') {
        skill = {
            user_ID: req.body.user_ID,
            skill: req.body.other_skills
        }

        Skill.create(skill)
    }
    res.send({ message: "Successfull" })

}


exports.add_technology = (req, res) => {

    for (i = 0; i < req.body.data.length; i++) {

        technology = {
            user_ID: req.body.user_ID,
            technology: req.body.data[i]
        }

        Technology.create(technology)

    }

    if (req.body.other_technologies != '') {
        technology = {
            user_ID: req.body.user_ID,
            technology: req.body.other_technologies
        }

        Technology.create(technology)
    }

    res.send({ message: "Successfull" })

}


exports.update_skill = (req, res) => {
    Skill.destroy({
        where: {
            user_ID: req.body.user_ID
        }
    })
        .then(result => {
            for (i = 0; i < req.body.data.length; i++) {

                skill = {
                    user_ID: req.body.user_ID,
                    skill: req.body.data[i]
                }

                Skill.create(skill)

            }

            skill = {
                user_ID: req.body.user_ID,
                skill: req.body.other_skills
            }

            Skill.create(skill)

            res.send({ message: "Successfull" })
        })

}


exports.update_technology = (req, res) => {
    Technology.destroy({
        where: {
            user_ID: req.body.user_ID
        }
    })
        .then(result => {
            for (i = 0; i < req.body.data.length; i++) {

                technology = {
                    user_ID: req.body.user_ID,
                    technology: req.body.data[i]
                }

                Technology.create(technology)

            }

            technology = {
                user_ID: req.body.user_ID,
                technology: req.body.other_technologies
            }

            Technology.create(technology)

            res.send({ message: "Successfull" })
        })

}