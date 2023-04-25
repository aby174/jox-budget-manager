var router = require('express').Router();
let usercontroller = require('../../controllers/userContoller');


router.post('/register',function(req,res,next){
  
    
    let reqBody=req.body;
    console.log("first middleware function",reqBody);
    next();
},usercontroller.registeruser);


module.exports = router;
