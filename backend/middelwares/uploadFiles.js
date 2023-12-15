const multer  = require('multer');

const storage= multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
});

const upload= multer({ 
    storage:storage
    
 });

exports.multipleUpload= upload.fields([
  {name:"moviePic",maxCount:1},
  {name:"movieVid",maxCount:1}
])

