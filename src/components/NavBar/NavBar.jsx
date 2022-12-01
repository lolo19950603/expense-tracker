import { Link } from "react-router-dom";
// import { useState } from "react";

// images
import logo from "../../img/logo.jpg";

export default function NavBar({ month, user, menuClick, setMenuClick }) {
  function getMonthText(month) {
    if (month === 0) {
      return 'January'
    }
    else if (month === 1) {
      return 'February'
    }
    else if (month === 2) {
      return 'March'
    }
    else if (month === 3) {
      return 'April'
    }
    else if (month === 4) {
      return 'May'
    }
    else if (month === 5) {
      return 'June'
    }
    else if (month === 6) {
      return 'July'
    }
    else if (month === 7) {
      return 'August'
    }
    else if (month === 8) {
      return 'September'
    }
    else if (month === 9) {
      return 'October'
    }
    else if (month === 10) {
      return 'November'
    }
    else if (month === 11) {
      return 'December'
    }
  }

  return (
    <nav>
      {user ? (
        <>
          <Link onClick={()=>setMenuClick(false)} to="/"><img src={logo} alt="logo" width="50" /></Link>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="spending">{getMonthText(month)}'s spending: $2000 </span>
          {menuClick ? (
            <>
              <button onClick={()=>setMenuClick(false)} class="btn material-symbols-outlined">close</button>
            </>
          ) : (
            <>
              <button onClick={()=>setMenuClick(true)} class="btn material-symbols-outlined">menu</button>
            </>
          )}
        </>
      ) : (
        <>
          <Link to="/"><img src={logo} alt="logo" width="50" /></Link>
        </>
      )}
    </nav>
  );
}
