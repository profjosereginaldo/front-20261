import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";

function App() {
  const pagina = 4;
  return (
    <>
      {pagina == 1 && <Dashboard />}
      {pagina == 2 && <Notas />}
      {pagina == 3 && <Faltas />}
      {pagina == 4 && <Boletos />}
      {pagina == 5 && <Requerimentos />}
    </>
  );
}

export default App;
