import Card from "../components/Card";
import Layout from "./Layout";

function Dashboard() {
  return (
    <>
      <Layout>
        <h2>Bem-vindo ao portal do aluno</h2>
        <section>
          <Card />
          <Card />
          <Card />
        </section>
      </Layout>
    </>
  );
}

export default Dashboard;
