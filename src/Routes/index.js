var router = require('express').Router();
let userrouter = require('../Routes/userroutes');

router.use('/api', userrouter);

module.exports = router;
