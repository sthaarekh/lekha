const express = require('express');
const {model} = require('mongoose');
const router = express.Router();
const Data = require('../models/Data')
const { body, validationResult } = require('express-validator');

router.use(express.json());

// Route 1: Takes expense from data
router.get('/getexpense',async(req,res)=>{
    const data = await Data.find();
    res.json(data)
})

// Route 2: Add expense to data
router.post('/addexpense', [
    body('description', 'Enter a valid description').isLength({ min: 5 }),
    body('category', 'Enter a valid category').isLength({ min: 2 }),
    body('amount','Enter a valid amount').notEmpty().isNumeric(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array()); // Log validation errors
            return res.status(400).json({ errors: errors.array() });
        }
        const{amount, description, category} = req.body
        const data = Data.create({
            amount, description, category
        })
        res.json(data)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;