const Transaction = require("../../models/transaction");

async function create(req, res, next) {
  try {
    const transaction = await Transaction.create(req.body);
    res.send({
      status: 200,
      transaction: transaction,
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  const current = new Date();
  let day = current.getDate();
  let next_day = current.getDate() + 1;
  let month = current.getMonth() + 1;
  if (day < 10) {
    day = `0${day}`;
  }
  if (next_day < 10) {
    next_day = `0${next_day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  const transactions = await Transaction.find({
    user: req.user,
    date: current
      .toLocaleString("en-US", { timeZone: "America/New_York" })
      .split(",")[0],
  });
  res.json(transactions);
}

async function allTime(req, res) {
  const transactions = await Transaction.find({user: req.user});
  res.json(transactions);
}

async function total(req, res, next) {
  const current = new Date();
  const transactions = await Transaction.find({
    user: req.user,
    date: current
      .toLocaleString("en-US", { timeZone: "America/New_York" })
      .split(",")[0],
  });
  let total = 0;
  transactions.map((transaction, idx) => (total += transaction.amount));
  res.json(total);
}

async function monthlyTotal(req, res, next) {
  const current = new Date();
  const transactions = await Transaction.find({
    user: req.user,
    date: {
      $regex: current
        .toLocaleString("en-US", { timeZone: "America/New_York" })
        .split(",")[0]
        .split("/")[0],
      $options: "i",
    },
  });
  let total = 0;
  transactions.map((transaction, idx) => (total += transaction.amount));
  res.json(total);
}

module.exports = {
  create,
  index,
  allTime,
  total,
  monthlyTotal,
};
