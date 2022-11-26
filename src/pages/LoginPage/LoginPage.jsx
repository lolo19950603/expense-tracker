import { Link } from 'react-router-dom';
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <section>
      <h1>Login</h1>
      <LoginForm setUser={setUser}/>
      <Link to="/signup">Sign up</Link>
    </section>
  );
}