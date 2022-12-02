const Transaction = require('../../models/transaction');

async function create (req, res, next){
    try{
        const transaction = await Transaction.create(req.body);
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports = {
    create
}