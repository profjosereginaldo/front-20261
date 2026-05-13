import "./Menu.css";
import { Link, NavLink } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

function Menu() {
  const { logout, usuario } = useAuthContext();

  const handleSair = () => {
    logout();
  }

  return (
    <nav>
      <h4>{usuario.nome}</h4>
      <h5>{usuario.email}</h5>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to={`/perfil/${usuario.id}`}>Perfil</NavLink></li>
        <li><NavLink to="/about">Sobre</NavLink></li>
        <li><NavLink to="/settings">Configurações</NavLink></li>
        <li><Link to="/" onClick={handleSair}>Sair</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
