import TransactionLineItem from '../TransactionLineItem/TransactionLineItem'

export default function TransactionIndex({ transactions }) {

  return (
    <div className="daily-summary">
      {transactions.map((transaction, idx) => (
        <TransactionLineItem transaction={transaction} key={idx} />
      ))}
    </div>
  );
}
