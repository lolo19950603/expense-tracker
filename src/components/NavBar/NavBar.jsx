import { Link } from "react-router-dom";
import { useState } from "react";

// images
import logo from "../../img/logo.jpg";

export default function NavBar({ user, menuClick, setMenuClick }) {

  return (
    <nav>
      {user ? (
        <>
          <Link onClick={()=>setMenuClick(false)} to="/"><img src={logo} alt="logo" width="50" /></Link>
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
