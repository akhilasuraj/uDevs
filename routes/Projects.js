const express = require("express")
const projects = express.Router()
const cors = require("cors")
var multer  = require('multer');
var path = require('path')
projects.use(cors())

const pro_cont = require("../controllers/Projects")

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './attachments');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  });

  var upload = multer({
    storage:storage,
    limits:{fileSize:'20M'}
  })

projects.post('/project/attachment',upload.single('attachment'),pro_cont.attachment)

//project Add a project
projects.post('/project/addProject',pro_cont.add_project)

//project view all project
projects.get('/viewAllCurrentProject',pro_cont.view_all_current_pro)
projects.get('/viewAllConfirmedProject',pro_cont.view_all_confirmed_pro)
projects.get('/viewAllCompletedProject',pro_cont.view_all_completed_pro)

//project view Project
projects.post('/project/viewProject',pro_cont.view_pro)

// project edit project
projects.post('/project/editProject',pro_cont.edit_pro)

// project delete project
projects.post('/project/deleteProject',pro_cont.delete_pro)




module.exports = projects