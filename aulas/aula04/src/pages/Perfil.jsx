import { useParams } from "react-router";
import { useForm } from "react-hook-form";

function Perfil() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // register() => {name="", onChange="", onBlur=""}
  // handleSubmit() => dispara a validacao,
  // informa ao React que mudou os campos

  const salvar = (data) => console.log(data);

  // buscar os dados do usuário

  const regras = {
    nome: {
      required: "Nome é obrigatório",
      minLength: { value: 3, message: "Nome tem no mínimo 3 caracteres" },
      maxLength: { value: 100, message: "Nome tem no máximo 100 caracteres" },
    },
    email: {
      required: "Email é obrigatório",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Email inválido ",
      },
    },
    nascimento: {
      validate: {
        dataMinima: (value) =>
          Date.parse(`${value} 00:00:00 UTC`) >= new Date("01/01/1900 00:00:00 UTC").getTime() || "Data inferior",
        dataMaxima: (value) =>
          Date.parse(`${value} 00:00:00 UTC`) < new Date().getTime() || "Data superior",
      },
    },
    telefone: {
      min: { value: 0, message: "Telefone invalido" },
      pattern: {
        value: /^(\(?\d{2}\)?[\s.-]?)?(\d{4,5})[\s.-]?(\d{4})$/,
        message: "Telefone invalido",
      },
    },
  };

  return (
    <>
      <h1>Perfil do Usuário {id}</h1>
      <form onSubmit={handleSubmit(salvar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" {...register("nome", regras.nome)} />
          {errors?.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", regras.email)} />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input
            type="date"
            id="nascimento"
            {...register("nascimento", regras.nascimento)}
          />
          {errors?.nascimento && <p>{errors.nascimento.message}</p>}
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            {...register("telefone", regras.telefone)}
          />
          {errors?.telefone && <p>{errors.telefone.message}</p>}
        </div>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default Perfil;
