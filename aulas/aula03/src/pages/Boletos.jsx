import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Boletos() {
  const colunas = [
    "Vencimento",
    "Valor",
    "Situação"
  ];

  const boletos = [
    {vencimento: "01/04/2026", valor: 500, situacao: "Pago"},
    {vencimento: "01/05/2026", valor: 500, situacao: "A vencer"},
    {vencimento: "01/06/2026", valor: 500, situacao: "A vencer"},
    {vencimento: "01/07/2026", valor: 500, situacao: "A vencer"},
    {vencimento: "01/08/2026", valor: 500, situacao: "A vencer"},
  ]

  return (
    <Layout 
        titulo="Meus Boletos" 
        subtitulo="Histórico de Pagamentos"
    >
      <Tabela titulos={colunas} dados={boletos} />
    </Layout>
  );
}

export default Boletos;
