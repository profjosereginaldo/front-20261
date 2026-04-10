import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout(props) {
  console.log(props);

  return (
    <>
      <Sidebar />
      <main>
        <Topbar titulo={props.titulo} />
        <h2>{props.subtitulo}</h2>
        <section>{props.children}</section>
      </main>
    </>
  );
}

export default Layout;
