const Transaction = require('../../models/transaction');

async function create (req, res, next){
    try{
        const transaction = await Transaction.create(req.body);
        res.send({
            status: 200,
            transaction: transaction
        })
    }catch(err){
        res.status(400).json(err);
    }
}

async function index(req, res) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const transactions = await Transaction.find({user: req.user, date: date});
    res.json(transactions);
  }

module.exports = {
    create,
    index
}