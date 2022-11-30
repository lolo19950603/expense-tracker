import { Link } from "react-router-dom";
// import { useState } from "react";

// images
// import logo from "../../img/logo.jpg";

export default function Calendar() {

  return (
    <div className="calendar">
        <Link to="/year">year</Link>
        <span class="material-symbols-outlined">arrow_forward</span>
        <Link to="/month">month</Link>
        <span class="material-symbols-outlined">arrow_forward</span>
        <Link to="/day">day</Link>
    </div>
  );
}
