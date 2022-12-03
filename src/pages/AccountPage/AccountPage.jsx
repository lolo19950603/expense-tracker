import "./AccountPage.css";
import { useState } from "react";
import DailySummary from "../../components/DailySummary/DailySummary";
import HistoryPage from "../HistoryPage/HistoryPage"
import { Link } from "react-router-dom";

export default function AccountPage({
  getTransactionsMonthlyTotal,
  user,
  date,
}) {
  const [formData, setFormData] = useState({
    date: "",
  });

  const [search, setSearch] = useState(false);

  const handleSubmit = async (e) => {
    // // when we submit we basically just grab whatever we have in
    // // the state.
    e.preventDefault();
    // try {
    //     const {transaction} = await transactionsAPI.create(formData);
    //     setFormData({
    //         user: user,
    //         description: '',
    //         amount: 0,
    //         date: current.toLocaleString('en-US', { timeZone: 'America/New_York' }).split(",")[0]
    //     });
    //     getTransactions();
    //     getTransactionsTotal();
    //     getTransactionsMonthlyTotal();
    // } catch (err) {
    //     console.error(err);
    // }
    setSearch(true);
  };

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value,
    };
    setFormData(newFormData);
  }
  return (
    <>
      <div className="LoginForm">
        <div className="form-container">
          <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="login-email">date</label>
            <input
              type="date"
              name="date"
              id="login-email"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      {search ? (
        <>
          <Link to="" onClick={()=>{setSearch(false);}}>Back to home</Link>
          <HistoryPage date={formData.date} />
        </>
      ):(
        <>
          <DailySummary
            getTransactionsMonthlyTotal={getTransactionsMonthlyTotal}
            user={user}
            date={date}
          />
        </>
      )}
    </>
  );
}
