import { useState, useEffect } from 'react';
import * as transactionsAPI from '../../utilities/api/transactions';

// // images
// import logo from "../../img/logo.jpg";

// Components
import TransactionIndex from '../TransactionIndex/TransactionIndex'
import TransactionForm from '../TransactionForm/TransactionForm'

export default function DailySummary({user, date}) {
  const [transactions, setTransactions] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(function() {
    async function getTransactions() {
      const transactions = await transactionsAPI.getAll();
      setTransactions(transactions);
    }
    getTransactions();
  }, []);

  async function getTransactions() {
      const transactions = await transactionsAPI.getAll();
      setTransactions(transactions);
  }

  useEffect(function() {
    async function getTransactionsTotal() {
      const total = await transactionsAPI.getTotal();
      setTotal(total);
    }
    getTransactionsTotal();
  }, []);

  async function getTransactionsTotal() {
    const total = await transactionsAPI.getTotal();
    setTotal(total);
  }

  return (
    <div className="daily-summary">
      <h2>{date}</h2>
      <h3>Daily Summary:</h3>
      <h4>Total Spend: ${total}</h4>
      <TransactionIndex transactions={transactions} />
      <TransactionForm user={user} getTransactions={getTransactions} getTransactionsTotal={getTransactionsTotal} />
    </div>
  );
}