import Card from "../components/Card";
import Layout from "./Layout";

function Dashboard() {
  const avisos = [
    "Eleição para representante",
    "Participe do IESB-SE"
  ];
 
  const datas = [
    "23/04 - Avaliação P1",
    "04/05 - Transferência de curso",
    "07/06 - Renovação de matrícula"
  ];

  const disciplinas = [
    "Construção de Frontend",
    "Devops",
    "BI e Data Warehousing"
  ];
  
  return (
    <Layout 
      titulo="Olá, Aluno" 
      subtitulo="Bem-vindo ao portal do aluno"
    >
      <Card titulo="Mural de Avisos" items={avisos} />
      <Card titulo="Calendário Acadêmico" items={datas} />
      <Card titulo="Minhas Disciplinas" items={disciplinas} />
    </Layout>
  );
}

export default Dashboard;
