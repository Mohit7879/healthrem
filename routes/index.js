const router=require('express').Router();
router.use('/api/user',require('./user.route.js'))




module.exports=router;