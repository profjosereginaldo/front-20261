import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Requerimentos() {
  return (
    <Layout 
      titulo="Meus Requerimentos"
      subtitulo="Faça solicitações online para a secretaria"
    >
        <Tabela />
    </Layout>
  );
}

export default Requerimentos;
