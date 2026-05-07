---
name: "Prática 06"
about: "Template para criar a issue da pratica06"
title: "[Prática 06] – Navegação entre Páginas com React Router"
labels: ["pratica06"]
assignees: ''
---

## 📌 Contexto
Nas práticas anteriores, você criou as páginas da aplicação **Aluno Online** como componentes React. Entretanto, a aplicação ainda não possui navegação real entre suas páginas.

Atualmente, para visualizar uma página diferente é preciso alterar manualmente o `App.jsx`, o que é inviável em uma aplicação real.

A equipe decidiu implementar um sistema de rotas para que o usuário possa navegar entre as páginas sem recarregar a aplicação.

## ❓ Problema Norteador
Como permitir que o usuário alterne entre diferentes páginas de uma SPA (Single Page Application) sem que o navegador recarregue a página completa?

## 🎯 Objetivo
Nesta prática, você irá:
- Instalar e configurar o **React Router**;
- Definir rotas para cada página da aplicação;
- Criar um componente `Layout` com `<Outlet />` para envolver as páginas;
- Substituir os links do menu lateral por componentes `<NavLink>`;
- Garantir que a navegação ocorra sem recarregamento de página.

## 📝 Instruções da Atividade
**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Abra um terminal e certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica06
```

**2️⃣ Implementação do código**
1. No terminal, instale o React Router:
```bash
npm install react-router
```
2. Em `main.jsx`, envolva o `<App />` com `<BrowserRouter>`;
3. Crie o componente `Layout` (em `src/components/Layout/`) que renderize:
- O componente de menu lateral (Sidebar);
- O componente `<Outlet />` do React Router no lugar onde as páginas devem aparecer.
4. Em `App.jsx`, configure as rotas utilizando `<Routes>` e `<Route>`:
- A rota pai `/` deve usar o componente `Layout`;
- Cada página deve ser uma rota filha com seu caminho correspondente:
   - `/` → `Dashboard`
   - `/faltas` → `Faltas`
   - `/notas` → `Notas`
   - `/boletos` → `Boletos`
   - `/requerimentos` → `Requerimentos`
5. No componente de menu lateral, crie os links para as páginas utilizando o componente `<NavLink>` do React Router;
6. Utilize a prop `className` do `<NavLink>` com a função `({ isActive })` para aplicar um estilo diferenciado ao item de menu da página atual.

**3️⃣ Execução e teste**
1. Inicie o servidor de desenvolvimento (caso não esteja rodando):
```bash
docker compose exec app npm run dev
```
2. Acesse no navegador: `http://localhost:5173`.
3. Teste a navegação e verifique:
- Se ao clicar nos itens do menu a página muda sem recarregar;
- Se a URL no navegador é atualizada corretamente;
- Se o item de menu da página atual aparece destacado visualmente;
- Se os botões de voltar/avançar do navegador funcionam;
- Se não há erros no console do navegador.

**4️⃣ Checklist antes de enviar**
- [ ] Branch criada a partir da `develop`
- [ ] `react-router` instalado
- [ ] `BrowserRouter` configurado no `main.jsx`
- [ ] Componente `Layout` criado com `<Outlet />`
- [ ] Rotas configuradas corretamente no `App.jsx`
- [ ] Menu lateral usando `<NavLink>` com estilo ativo
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão e grave suas alterações. Substitua `#ID` pelo número da Issue (ex.: 11).
```bash
git add .
git commit -m "feat: conclui pratica06. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica06
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, implementei a navegação entre páginas com React Router. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino.

⚠️ **Erros comuns**
- Envolver o `<BrowserRouter>` no lugar errado (dentro do `App` em vez de no `main.jsx`);
- Esquecer o `<Outlet />` no componente `Layout`, fazendo as páginas não renderizarem;
- Usar `<a href="...">` no menu em vez de `<NavLink to="...">` — isso causa recarregamento;
- Definir a rota do `Dashboard` como `/dashboard` em vez de `/`, deixando a raiz vazia;
- Criar a branch de trabalho a partir de uma branch diferente da indicada;
- Enviar o PR para a branch errada.