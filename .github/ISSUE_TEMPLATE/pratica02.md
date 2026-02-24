---
name: "Prática 02"
about: "Template para criar a issue da pratica02"
title: "[Prática 02] – Interatividade com JavaScript"
labels: ["pratica02"]
assignees: ''
---

## 📌 Contexto
Após a reestruturação da Dashboard, o time identificou um novo problema. 

Usuários estão conseguindo submeter o formulário de login com campos vazios, gerando requisições inválidas para o servidor. Isso causa tráfego desnecessário, experiência ruim para o usuário, falhas no backend e retrabalho da equipe.

Antes de integrar com API real, o time decidiu implementar validação no lado do cliente. Você foi designado para propor e implementar essa solução.

## ❓ Problema Norteador
Como garantir que o formulário de login não seja enviado com campos vazios, forneça feedback claro ao usuário, não recarregue a página desnecessariamente e seja organizado e escalável para futuras validações?

## 🎯 Objetivo
Nesta prática, você irá:
- Construir uma nova página de Login;
- Manipular o DOM de forma adequada;
- Trabalhar com eventos de formulário;
- Controlar comportamento padrão do navegador;
- Exibir feedback dinâmico ao usuário;
- Organizar código JavaScript de forma clara e sustentável.

## 🖼️ Referência Visual
Utilize as imagens fornecidas como guia estrutural e visual.

![Tela de Login](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/login.png)

![Tela de Login com Validação](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/validacao.png)

## 📝 Instruções da Atividade
**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Abra um terminal e certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica02
```

**2️⃣ Implementação do código**
1. No painel esquerdo do VSCode, localize a pasta `aluno-online-vanilla`.
2. Desenvolva no arquivo `login.html` a página de Login contendo email, senha, botão de envio e área para mensagens de erro.
- Deve existir apenas um `<form>`;
- Cada campo deve possuir associação semântica correta com seu `<label>`.
3. Desenvolva no arquivo `style.css` os estilos da página de Login.
4. Desenvolva no arquivo `main.js` a validação do formulário.
- O formulário não pode ser enviado se houver campos vazios;
- O usuário recebe uma mensagem de erro clara;
- As mensagens desaparecem quando o problema for corrigido;
- A página não pode ser recarregada indevidamente;
- Não é permitido utilizar `alert()` para exibir erros;
- Não utilizar atributos HTML como required como única solução;
- Caso a validação seja bem-sucedida, o usuário deve prosseguir para a Dashboard.

**3️⃣ Execução e teste**
1. No terminal, acesse a pasta do projeto.
```bash
cd praticas/aluno-online-vanilla
```
2. Suba o container e instale as dependências:
```bash
docker compose up -d
docker compose exec app npm install
```
3. Inicie o servidor de desenvolvimento:
```bash
docker compose exec app npm run dev
```
4. Acesse no navegador: `http://localhost:5173`.
5. Teste os seguintes cenários:
- Submeter com campos vazios;
- Preencher apenas um campo;
- Preencher ambos os campos.

4️⃣ **Checklist antes de enviar**
- [ ] Branch criada a partir da develop
- [ ] Página de login estruturada e estilizada corretamente
- [ ] Validação implementada
- [ ] Mensagens de erro exibidas corretamente
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão e grave suas alterações. Substitua `#ID` pelo número da Issue (ex.: 10).
```bash
git add .
git commit -m "feat: conclui pratica02. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica02
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, implementei a página de login com validação utilizando JavaScript. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino para o professor.

⚠️ **Erros comuns**
- Criar a branch de trabalho a partir de uma branch diferente da indicada na atividade;
- Selecionar elementos incorretamente no DOM;
- Esquecer de limpar mensagens de erro anteriores;
- Esquecer de iniciar o Docker;
- Enviar PR para a branch errada.