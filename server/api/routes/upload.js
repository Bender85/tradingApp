const express = require('express');
const router = express.Router();
const multer = require('multer');
const mkdirp = require('mkdirp');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var dest = 'public/uploads/';
        mkdirp(dest, function (err) {
            if (err) cb(err, dest);
            else cb(null, dest);
        });
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, Date.now() + ' - ' + file.originalname);
    }
});

const upload = multer({ storage: storage })

router.post('/upload', upload.any(), function(req , res){
    console.log(req.body);
    res.send(req.files);
});

module.exports = router;
