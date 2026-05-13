import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  const handleEntrar = () => {
    login({usuario: "jose@iesb.edu.br", senha: "123456"});
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>Entrar</button>
    </>
  );
}

export default Login;
