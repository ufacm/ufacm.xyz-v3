var express = require('express');
var router = express.Router();

var Busboy = require('busboy');
var fs = require('fs-extra');

router.post("/resume-upload", function(req, res) {  
    const busboy = new Busboy({ headers: req.headers });
   
    busboy.on("file", function(fieldname, file, filename) {
        const fstream = fs.createWriteStream(__dirname + '/../public/upload/' + filename);
        file.pipe(fstream);
    });
  
    busboy.on('finish', function() {
      res.send({message: "GOT IT"});
    });
  
    return req.pipe(busboy);
  });

module.exports = router;
