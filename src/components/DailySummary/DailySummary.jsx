// import { Link } from "react-router-dom";
// import { useState } from "react";

// // images
// import logo from "../../img/logo.jpg";

// Components
import TransactionIndex from '../TransactionIndex/TransactionIndex'
import TransactionForm from '../TransactionForm/TransactionForm'

export default function DailySummary({user, date}) {

  return (
    <div className="daily-summary">
      <h2>{date}</h2>
      <h3>Daily Summary:</h3>
      <TransactionIndex user={user} />
      <TransactionForm user={user} />
    </div>
  );
}
