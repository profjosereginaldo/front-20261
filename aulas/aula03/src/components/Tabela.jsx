function Tabela({ titulos, dados }) {
  return (
    <table>
      <thead>
        <tr>
          {titulos.map((item, index) => (
            <td key={index}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((valor, index) => (
              <td key={index}>{valor}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
