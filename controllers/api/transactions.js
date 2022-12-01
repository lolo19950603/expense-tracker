const Transaction = require('../../models/transaction');

async function create (req, res, next){
    try{
        const user = await User.create(req.body);
        const token = createJWT(user)
        res.json(token)
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports = {
    create
}