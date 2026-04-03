import logo from "../assets/learn.svg";
import Menu from "./Menu";

function Sidebar() {
  return (
    <aside>
      <header>
        <img src={logo} alt="logotipo" />
        <h1>Aluno Online</h1>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;
