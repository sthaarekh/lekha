const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const lBSchema = new Schema({
    amount:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
const Trans = mongoose.model('trans',lBSchema)
module.exports = Trans
