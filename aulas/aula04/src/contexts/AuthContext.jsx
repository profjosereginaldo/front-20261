import { createContext, useContext, useState } from "react";

// cria o contexto
const AuthContext = createContext();

// cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(true);
  const [usuario, setUsuario] = useState({});

  const login = (dados) => {
    // chamar a API passando dados
    setUsuario({ 
        id: 0, 
        nome: "Jose", 
        email: "jose@iesb.edu.br" 
    });
    setLogado(true);
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {/* value =  estado compartilhado */}
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
    return useContext(AuthContext);
}

export { useAuthContext, AuthProvider };
