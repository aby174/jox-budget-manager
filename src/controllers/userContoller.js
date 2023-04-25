

let usercontroller = {
    registeruser(req,res,next){
        console.log('inside register user');
        res.json({
            status:200,
            info:'ok',
            data: req.body
        });

    }
}

module.exports = usercontroller