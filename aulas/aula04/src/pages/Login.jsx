import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();  

  return (
    <>
      <h1>Login</h1>
      <button onClick={() => navigate("/")}>Entrar</button>
    </>
  );
}

export default Login;
