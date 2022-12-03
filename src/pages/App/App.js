import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import * as transactionsAPI from '../../utilities/api/transactions';

// images
// import background from "../../img/background.jpg";

// Pages
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import AccountPage from "../AccountPage/AccountPage";
import YearPage from "../YearPage/YearPage";
import MonthPage from "../MonthPage/MonthPage";

// Components
import NavBar from "../../components/NavBar/NavBar";

// Helpers
import { getUser } from "../../utilities/services/users";
import * as userService from "../../utilities/services/users";

import "./App.css";

export default function App() {
  const current = new Date();

  const [user, setUser] = useState(getUser());

  const [menuClick, setMenuClick] = useState(false);

  const [monthlyTotal, setMonthlyTotal] = useState(0);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setMenuClick(false);
  }

  useEffect(function() {
    async function getTransactionsMonthlyTotal() {
      const monthlyTotal = await transactionsAPI.getMonthlyTotal();
      setMonthlyTotal(monthlyTotal);
    }
    getTransactionsMonthlyTotal();
  }, []);

  async function getTransactionsMonthlyTotal() {
    const monthlyTotal = await transactionsAPI.getMonthlyTotal();
    setMonthlyTotal(monthlyTotal);
  }

  return (
    <main className="App">
      <NavBar month={current.getMonth()} user={user} menuClick={menuClick} setMenuClick={setMenuClick} monthlyTotal={monthlyTotal} />
      {menuClick ? (
        <div className="menu">
          <Link className="menu-item" to="" onClick={() => {setMenuClick(false)}}>Home</Link>
          <Link className="menu-item" to="" onClick={handleLogOut}>Log Out</Link>
        </div>
      ) : (
        <></>
      )}
      <div>
        {user ? (
          <>
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<AccountPage getTransactionsMonthlyTotal={getTransactionsMonthlyTotal} user={user} date={current.toLocaleString('en-US', { timeZone: 'America/New_York' }).split(",")[0]}/>} />
              <Route path="/year" element={<YearPage />} />
              <Route path="/month" element={<MonthPage />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              {/* Auth Route components in here */}
              <Route path="/" element={<LoginPage setUser={setUser} />} />-
              <Route
                path="/signup"
                element={<SignupPage setUser={setUser} />}
              />
              -
            </Routes>
          </>
        )}
      </div>
    </main>
  );
}
