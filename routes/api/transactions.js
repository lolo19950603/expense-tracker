const express = require('express');
const router = express.Router();
const transactionsCtrl = require('../../controllers/api/transactions');

router.get('/', transactionsCtrl.index);
router.post('/create', transactionsCtrl.create);
router.get('/total', transactionsCtrl.total);
router.get('/monthlytotal', transactionsCtrl.monthlyTotal);

module.exports = router;