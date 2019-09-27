var fs = require('fs');
const User = require("../models/User")

const ImageData = {
  user_ID: 0,
  image_name: '',
}

exports.get_user_id = (req, res) => {
  ImageData.user_ID = req.body.user_ID
  ImageData.image_name = req.body.image_name
}

exports.profile_image = (req, res, next) => {
  if (!req.file) {
    res.status(500);
    return next(err);
  } else {
    console.log(ImageData)

    if(ImageData.image_name != 'default.png'){
      var filePath = './uploads/'.concat(ImageData.image_name) ; 
      fs.unlinkSync(filePath);
    }

    User.update({
      profile_img: req.file.filename
    },
      {
        where: {
          id: ImageData.user_ID
        }
      })

    User.findOne({
      where: {
        id: ImageData.user_ID
      }
    })
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('User does not exist')
        }
      })
    // res.json({ fileUrl: 'http://localhost:3000/' + req.file.filename });
  }
}
