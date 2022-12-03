export default function TransactionLineItem({ transaction }) {
  return (
    <div className="transactions_display">
      <p>Description: <b>{transaction.description}</b></p>
      <p>Amount: <b>${transaction.amount}</b></p>
      {/* <Link to="">delete</Link> */}
    </div>
  );
}
