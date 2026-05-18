---
name: "Prática 07"
about: "Template para criar a issue da pratica07"
title: "[Prática 07] – Estado Global de Autenticação com Context API"
labels: ["pratica07"]
assignees: ""
---

## 📌 Contexto
Na prática anterior, você implementou a navegação entre páginas da aplicação **Aluno Online** utilizando o React Router. Entretanto, a aplicação ainda não possui controle de acesso.

Qualquer pessoa pode acessar diretamente qualquer rota digitando a URL no navegador, mesmo sem estar autenticada. Além disso, a tela de login já implementada não está conectada ao restante da aplicação — o clique no botão não produz nenhum efeito real na navegação.

A equipe decidiu implementar um estado global de autenticação e proteger as rotas internas da aplicação.

## ❓ Problema Norteador
Como compartilhar o estado de autenticação entre componentes que não possuem relação direta de pai e filho, e como impedir o acesso a rotas privadas sem precisar passar props por toda a árvore de componentes?

## 🎯 Objetivo
Nesta prática, você irá:
- Criar um **contexto de autenticação** utilizando Context API;
- Criar um **provider** que armazena e distribui o estado de autenticação;
- Conectar a tela de login ao contexto para que o clique no botão autentique o usuário;
- Redirecionar o usuário não autenticado para o Login e o autenticado para o Dashboard.

## 📝 Instruções da Atividade
**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica07
```

**2️⃣ Implementação do código**
1. Crie o arquivo `src/contexts/AuthContext.jsx`;
2. Implemente o `AuthProvider` para gerenciar dois estados: `autenticado` (boolean) e `usuario` (object), e expor as funções de `login` (que recebe dados do usuário) e `logout` (que limpa o estado).
3. Crie o hook `useAuth` para que outros componentes consumam o contexto de forma limpa;
4. Envolva a aplicação no `main.jsx` com o provedor criado.
5. Refatore o `App.jsx` para que a renderização das rotas dependa do estado `autenticado`. Se o usuário não estiver logado, ele deve ser forçado a ver apenas a rota de Login.
6. Refatore o `Login.jsx` para chamar a função `login` ao submeter o formulário;
7. Refatore o `Topbar.jsx` para exibir o usuário logado;
8. Refatore o `Menu.jsx` para exibir a opção "Sair", que, ao ser clicado, chama a função `logout`;

**3️⃣ Execução e teste**
1. Inicie o servidor de desenvolvimento (caso não esteja rodando):
```bash
docker compose exec app npm run dev
```
2. Acesse no navegador: `http://localhost:5173`.
3. Teste os seguintes cenários:
- Acesse `/` sem estar autenticado — deve redirecionar para `/login`;
- Acesse `/faltas` diretamente pela URL sem autenticação — deve redirecionar para `/login`;
- Preencha o formulário de login e clique em entrar — deve redirecionar para o Dashboard;
- Clique na opção "Sair" — deve retornar para a tela de login;
- Verifique que não há erros no console do navegador.

**4️⃣ Checklist antes de enviar**
- [ ] Branch criada a partir da `develop`
- [ ] `AuthContext` e `AuthProvider` criados em `src/contexts/`
- [ ] `AuthProvider` envolve a aplicação no `main.jsx`
- [ ] Rotas protegidas corretamente configuradas no `App.jsx`
- [ ] Tela de Login conectada ao contexto com redirecionamento após autenticação
- [ ] Botão de logout funcional no menu
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão. Substitua `#ID` pelo número da Issue.
```bash
git add .
git commit -m "feat: conclui pratica07. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica07
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, implementei o estado global de autenticação com Context API e protegi as rotas da aplicação. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino.

⚠️ **Erros comuns**
- Criar o `AuthProvider` mas esquecer de envolver a aplicação com ele no `main.jsx`;
- Usar `useAuth` fora de um componente que está dentro do `AuthProvider`;
- Chamar `logout()` mas não perceber que o redirecionamento é automático;
- Criar a branch de trabalho a partir de uma branch diferente da `develop`;
- Enviar o PR para a branch errada.
