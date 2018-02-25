var express = require('express');
var router = express.Router();

var Busboy = require('busboy');
var fs = require('fs-extra');

var drive = require('../util/saveToDrive');

router.post("/resume-upload", function(req, res) {  
    const busboy = new Busboy({ headers: req.headers });
   
    busboy.on("file", function(fieldname, file, filename) {
        drive.saveFile(file, filename);
    });
  
    busboy.on('finish', function() {
      res.send({message: "GOT IT"});
    });
  
    return req.pipe(busboy);
  });

module.exports = router;
