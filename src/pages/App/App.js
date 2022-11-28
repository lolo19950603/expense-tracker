import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// images
import background from "../../img/background.jpg";

// Components
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import DailySummaryPage from "../DailySummaryPage/DailySummaryPage";
import NavBar from "../../components/NavBar/NavBar";

// Helpers
import { getUser } from "../../utilities/services/users";
import * as userService from "../../utilities/services/users";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());

  const [menuClick, setMenuClick] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setMenuClick(false);
  }


  return (
    <main className="App">
      <NavBar user={user} menuClick={menuClick} setMenuClick={setMenuClick}/>
      {menuClick ? (
        <div className="menu">
          <Link className="menu-item" to="" onClick={handleLogOut}>Log Out</Link>
          <Link className="menu-item" to="" onClick={() => {setMenuClick(false)}}>Fake btn</Link>
          <Link className="menu-item" to="" onClick={() => {setMenuClick(false)}}>Fake btn</Link>
          <Link className="menu-item" to="" onClick={() => {setMenuClick(false)}}>Fake btn</Link>
        </div>
      ) : (
        <></>
      )}
      <div>
        {user ? (
          <>
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<DailySummaryPage />} />
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
