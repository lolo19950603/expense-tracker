import { Link } from 'react-router-dom';
import * as userService from '../../utilities/services/users'

export default function NavBar({ user, setUser }) {
  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      &nbsp; &nbsp; <span className="name">Hey there {user.name}!</span>
      &nbsp; &nbsp; <Link to="" onClick={handleLogOut}>Log Out</Link>

    </nav>
  );
}