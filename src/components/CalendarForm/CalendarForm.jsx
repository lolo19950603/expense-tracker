import { useState } from "react";

// images
// import logo from "../../img/logo.jpg";

export default function CalendarForm() {
  const [formData, setFormData] = useState({
    date: ''
})

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
    console.log(formData);
  };

  function handleChange(evt) {
    // Replace with new object and use a computed property
    // to update the correct property
    const newFormData = {
      ...formData, // use the existing formData
      [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
    };
    setFormData(newFormData);
  }

  return (
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
  );
}
