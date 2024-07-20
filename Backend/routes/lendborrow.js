const express = require('express');
const {model} = require('mongoose');
const router = express.Router();
const Trans = require('../models/LendBorrow')
const { body, validationResult } = require('express-validator');

// Route 1: Takes expense from data
router.get('/gettrans',async(req,res)=>{
    const trans = await Trans.find();
    res.json(trans)
})

// Route 2: Add Lend and Borrowed data
router.post('/addtrans', [
    body('description', 'Enter a valid description').isLength({ min: 3 }),
    body('tag', 'Enter a valid tag').isLength({ min: 3 }),
    body('amount','Enter a valid amount').notEmpty().isNumeric(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(body('tag'));
            return res.status(400).json({ errors: errors.array() });
        }
        const{description, amount, tag} = req.body
        const trans = Trans.create({
            description, amount, tag
        })
        res.json(trans)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
})
//Route 3: Delete an transaction using delete
router.delete('/deletetrans/:id',async (req, res) => {
    try {
        //find the note to be deleted and delete it
        let trans = await Trans.findById(req.params.id);
        if (!trans) { return res.status(404).send("Not Found") }

        trans = await Trans.findByIdAndDelete(req.params.id)
        res.json("Success transaction has been deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;