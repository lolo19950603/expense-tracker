import { useState, useEffect, useRef } from 'react';
import * as transactionsAPI from '../../utilities/api/transactions';

export default function TransactionIndex({ user }) {

  const [transactions, setTransactions] = useState([]);

  useEffect(function() {
    async function getItems() {
      const transactions = await transactionsAPI.getAll();
      setTransactions(transactions);
    }
    getItems();
  }, []);
  return (
    <div className="daily-summary">
      <h1>{transactions}</h1>
    </div>
  );
}
