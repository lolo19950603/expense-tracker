// import { Link } from "react-router-dom";
// import { useState } from "react";

// // images
// import logo from "../../img/logo.jpg";

// Components
import TransactionForm from '../TransactionForm/TransactionForm'

export default function DailySummary({date}) {

  return (
    <div className="daily-summary">
      <h2>{date}</h2>
      <h3>Daily Summary:</h3>
      <TransactionForm />
    </div>
  );
}
