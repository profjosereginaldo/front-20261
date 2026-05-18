---
name: "Prática 09"
about: "Template para criar a issue da pratica09"
title: "[Prática 09] – Integração com API REST Simulada usando JSON Server"
labels: ["pratica09"]
assignees: ''
---

## 📌 Contexto
Na prática anterior, você construiu o formulário de cadastro de requerimento utilizando o React Hook Form. O formulário valida os dados corretamente e os exibe no console após a submissão, mas as informações não são persistidas em lugar nenhum — ao recarregar a página, tudo é perdido.

Em aplicações reais, os dados são enviados e recuperados de uma API REST. Para simular esse comportamento sem a necessidade de um backend real, a equipe decidiu utilizar o **JSON Server**, que transforma um arquivo `db.json` em uma API REST completa com suporte a GET, POST, PUT, PATCH e DELETE.

## ❓ Problema Norteador
Como integrar um formulário React a uma API REST, realizando operações de leitura e escrita de dados de forma assíncrona, sem depender de um backend desenvolvido?

## 🎯 Objetivo
Nesta prática, você irá:
- Configurar e executar um ambiente de API simulado utilizando o **JSON Server**;
- Consumir recursos de forma assíncrona utilizando a **Fetch API** (`GET` e `POST`);
- Gerenciar efeitos colaterais e ciclo de vida de montagem com o hook `useEffect`;
- Abstrair a lógica de dados em uma camada de serviço(*services*) para manter os componentes limpos.

## 📝 Instruções da Atividade
**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica09
```

**2️⃣ Implementação do código**
1. No terminal, instale o **JSON Server** como dependência de desenvolvimento;
2. Crie um arquivo `db.json` na raiz com a estrutura base de `requerimentos`;
3. Ajuste o `package.json` e o `docker-compose.yml` para expor e mapear a porta **3000**.
4. Crie o arquivo `src/services/requerimentoService.js`;
5. Implemente funções `async/await` para listar e cadastrar;
6. Na página `Requerimentos.jsx`, dispare um efeito (`useEffect`) que busca os dados da API e popula o estado da lista;
7. Ao submeter o formulário `RequerimentoForm`com sucesso, envie os dados para a API;

**3️⃣ Execução e teste**
1. Inicie o servidor de desenvolvimento (caso não esteja rodando):
```bash
docker compose exec app npm run dev
```
2. Acesse no navegador: `http://localhost:5173`.
3. Teste os seguintes cenários:
- A listagem deve exibir o requerimento de exemplo do `db.json` ao carregar a página;
- Preencha o formulário com dados válidos e submeta. Veja se o novo requerimento aparece na listagem;
- Recarregue a página para ver se os requerimento sejam lidos novamente da API;
- Verifique que não há erros no console do navegador.

**4️⃣ Checklist antes de enviar**
- [ ] Branch criada a partir da `develop`
- [ ] `json-server` instalado como dependência de desenvolvimento
- [ ] `db.json` criado com a estrutura correta na raiz do projeto
- [ ] Arquivo `src/services/requerimentoService.js` criado
- [ ] Listagem carregada via `GET` com `useEffect` na página de Requerimentos
- [ ] Formulário enviando dados via `POST` ao submeter
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão. Substitua `#ID` pelo número da Issue.
```bash
git add .
git commit -m "feat: conclui pratica09. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica09
```
4. No GitHub, clique em **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, integrei o cadastro de requerimentos com uma API REST simulada usando JSON Server. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino.

⚠️ **Erros comuns**
- Esquecer de expor a porta do JSON Server no container;
- Usar `localhost` no `BASE_URL` sem perceber que dentro do container o endereço de host pode ser diferente;
- Confundir a porta do Vite (5173) com a do JSON Server (3000) na URL das requisições;
- Chamar `listarRequerimentos` dentro do `useEffect` sem tratar a Promise corretamente;
- Esquecer o header `Content-Type: application/json` no `POST`;
- Criar a branch de trabalho a partir de uma branch diferente da `develop`;
- Enviar o PR para a branch errada.