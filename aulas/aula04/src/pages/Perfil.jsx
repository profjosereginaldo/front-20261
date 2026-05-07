import { useParams } from 'react-router';

function Perfil() {
  const { id } = useParams();  

  // buscar os dados do usuário

  return <h1>Perfil do Usuário {id}</h1>;
}

export default Perfil;
