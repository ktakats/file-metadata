'use strict';

var express=require('express');
var multer=require('multer');

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
//var upload = multer({ dest: 'uploads/' });
var app=express();
app.use(express.static(__dirname+ '/public'));

app.post('/upload', upload.single('myfile'), function (req, res, next) {
  if(req.file){
    res.json({
      file: req.file.originalname,
      size: req.file.size
    });
  }
  else {
    res.status(400).end();
  }
});

app.get('/',function(req,res){
  res.sendFile(process.cwd()+'/index.html');
})


var port=process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Node.js listening on port ...' + port + '...');
});
