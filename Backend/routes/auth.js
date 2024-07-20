const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//Create a user using: POST  "/api/auth"
router.post('/',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({min:3}),
    body('password','Password must be at least 5 letters').isLength({min:5}),
],(req,res)=>{
    const errors = validationResult (req);
        if (!errors.isEmpty())
            return res.status(400).json({errors: errors.array() });
        res.send(req.body );
        User.create({ 
            username: req.body.username, 
            password: req.body.password,
        }).then(user => res.json(user));
})


module.exports = router;