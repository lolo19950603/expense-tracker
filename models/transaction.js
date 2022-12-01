const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

const transactionSchema = new Schema({
    description: { type: String, trim: true, required: true },
    amount: {
        type: Number,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    toJSON:{
        transform: function(doc, ret){
            delete ret.password
            return ret
        }
    }
});

module.exports = mongoose.model('transaction', transactionSchema);



