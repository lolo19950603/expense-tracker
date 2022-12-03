import { useState, useEffect } from "react";
import TransactionLineItem from "../../components/TransactionLineItem/TransactionLineItem";
import * as transactionsAPI from "../../utilities/api/transactions";
export default function HistoryPage({ date }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(function () {
    async function getTransactions() {
      const transactions = await transactionsAPI.getAllTime();
      var newTransactions = transactions.filter(function (transaction) {
        const dateList = date.split('-');
        return transaction.date === `${parseInt(dateList[1])}/${parseInt(dateList[2])}/${dateList[0]}`;
      });
      setTransactions(newTransactions);
    }
    getTransactions();
  }, [date]);

  return (
    <div className="daily-summary">
      {transactions.map((transaction, idx) => (
        <TransactionLineItem transaction={transaction} key={idx} />
      ))}
    </div>
  );
}
