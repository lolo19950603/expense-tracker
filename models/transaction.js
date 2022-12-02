const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
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
    toJSON: { virtuals: true }
});

module.exports = mongoose.model('transaction', transactionSchema);



