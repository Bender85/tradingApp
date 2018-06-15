const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const mkdirp = require('mkdirp');
const XLSX = require('xlsx');

const filData = require('../models/parse');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dest = 'public/upload/';
        mkdirp(dest, function (err) {
            if (err) cb(err, dest);
            else cb(null, dest);
        });
    },
    filename: function (req, file, cb) {
        // console.log(file);
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage}).any();

router.post('/upload', (req , res, next) => {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log("Error uploading file");
            return res.send("Error uploading file");
        }
        console.log("URRA");
        const originalFileName = req.files[0].originalname;
        console.log(originalFileName);
        const uploadpath = 'public/upload/' + originalFileName;
        console.log(uploadpath);
        const workbook = XLSX.readFile(uploadpath);
        const data = workbook.SheetNames.map(sheetName => {
            return {
                sheetName: sheetName,
                data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
            };
        });
        console.log(data);

        // save to data base

        const fileData = new filData(data);
        fileData
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
        res.status(201).json({
            message: 'handling post request'
        });

        // Everything went fine
    });
});

module.exports = router;
