export default {
  appType: "mpa",
  // Configuração para Multi-Page Application (MPA)
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        login: "login.html",
      },
    },
  },
  // Configuração do Servidor para Docker  
  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true,
    },
    hmr: {
      clientPort: 5173,
    },
  },
};
