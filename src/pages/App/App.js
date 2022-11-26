import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import DailySummaryPage from '../DailySummaryPage/DailySummaryPage';
import NavBar from '../../components/NavBar/NavBar';

// Helpers
import { getUser } from '../../utilities/services/users';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <h1>Expense Tracker</h1>
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<DailySummaryPage />} />
            </Routes>
          </>
          :
          <>
            <Routes>
              {/* Auth Route components in here */}
              <Route path="/" element={<LoginPage setUser={setUser} />} />-
              <Route path="/signup" element={<SignupPage setUser={setUser} />} />-
            </Routes>
          </>
      }
    </main>
  );
}
