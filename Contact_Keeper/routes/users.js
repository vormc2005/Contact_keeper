const express = require('express');
const router = express.Router();


//Register user

//@ route POST api/user
//@desc Register a user
//@access  Public
router.post('/', (req, res)=>{res.send('Registered a user')});




module.exports = router;


