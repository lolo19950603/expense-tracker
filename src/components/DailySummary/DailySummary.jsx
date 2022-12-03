import { useState, useEffect } from 'react';
import * as transactionsAPI from '../../utilities/api/transactions';

// // images
// import logo from "../../img/logo.jpg";

// Components
import TransactionIndex from '../TransactionIndex/TransactionIndex'
import TransactionForm from '../TransactionForm/TransactionForm'

export default function DailySummary({user, date}) {
  const [transactions, setTransactions] = useState([]);

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

  return (
    <div className="daily-summary">
      <h2>{date}</h2>
      <h3>Daily Summary:</h3>
      <TransactionIndex transactions={transactions} />
      <TransactionForm user={user} getTransactions={getTransactions} />
    </div>
  );
}
