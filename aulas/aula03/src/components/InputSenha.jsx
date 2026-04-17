function InputSenha({erro, mudaValor}) {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        onChange={mudaValor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputSenha;
