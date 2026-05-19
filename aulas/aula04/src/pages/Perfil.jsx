import { useParams } from "react-router";
import { useForm } from "react-hook-form";

function Perfil() {
  const { id } = useParams();
  const { register, handleSubmit, formState: {errors} } = useForm();
  // register() => {name="", onChange="", onBlur=""}
  // handleSubmit() => dispara a validacao,
  // informa ao React que mudou os campos

  const salvar = (data) => console.log(data);

  // buscar os dados do usuário

  const regras = {
    nome: { required: "Nome é obrigatório" },
    email: { required: "Email é obrigatório" },
    nascimento: {},
    telefone: {},
  };

  return (
    <>
      <h1>Perfil do Usuário {id}</h1>
      <form onSubmit={handleSubmit(salvar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            {...register("nome", regras.nome)} 
          />
          { errors?.nome && <p>{ errors.nome.message }</p> }
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            {...register("email", regras.email)} 
          />
          { errors?.email && <p>{ errors.email.message }</p> }
        </div>
        <div>
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input
            type="date"
            id="nascimento"
            {...register("nascimento", regras.nascimento)}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            {...register("telefone", regras.telefone)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default Perfil;
