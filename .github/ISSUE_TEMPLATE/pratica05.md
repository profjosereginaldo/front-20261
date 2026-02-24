---
name: "Prática 05"
about: "Template para criar a issue da pratica05"
title: "[Prática 05] – Tratamento de Eventos em React"
labels: ["pratica05"]
assignees: ''
---

## 📌 Contexto
A aplicação **Aluno Online** já possui múltiplas telas organizadas em componentes reutilizáveis.

No entanto, o sistema ainda não permite que o usuário realize autenticação.

A equipe identificou a necessidade de implementar uma tela de Login que seja capaz de capturar dados digitados pelo usuário, reagir às interações do formulário, validar entradas antes do envio e atualizar dinamicamente a interface.

Até o momento, a aplicação é estrutural. Agora ela precisa reagir às ações do usuário.

## ❓ Problema Norteador
Como permitir que a interface reaja às ações do usuário utilizando eventos no React?

## 🎯 Objetivo
Nesta prática, você irá:
- Implementar tratamento de eventos (`onChange` e `onSubmit`);
- Controlar os valores digitados utilizando `state`;
- Atualizar dinamicamente a interface com base nas interações do usuário;
- Utilizar `props` para comunicação entre componentes;
- Impedir comportamento padrão de recarregamento do formulário;
- Exibir mensagens de validação de forma dinâmica.

## 🖼️ Referência visual
Utilize como guia:

![Tela de Login](https://raw.githubusercontent.com/profjosereginaldo/tecweb-template/refs/heads/main/assets/login.png)

![Tela de Login com Validação](https://raw.githubusercontent.com/profjosereginaldo/tecweb-template/refs/heads/main/assets/validacao.png)

## 📝 Instruções da Atividade
**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Abra um terminal e certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica05
```

**2️⃣ Implementação do código**
1. No painel esquerdo do VSCode, localize a pasta `aluno-online-react`.
2. Desenvolva os componentes da seguinte forma: 
- Crie componentes para os inputs sem estado;
- Os inputs devem ser controlados, recebendo `value` e `onChange` via `props`;
- Cada componente deve ser criado como função;
- Cada componente deve estar em arquivo próprio;
- Cada componente deve possuir seu próprio arquivo CSS.
3. Desenvolva a página nos arquivos `Login.jsx` e `Login.css`.
- Crie estados necessários para armazenar valores e mensagens de erro;
- Passe os estados e funções de atualização para os componentes via `props`.
- Crie um evento `handleSubmit()` para evitar o recarregamento da página, validar os dados do formulário e atualizar os estados de erro;
- A validação deve verificar campos obrigatórios, formato básico de e-mail e senha com mínimo de 6 caracteres;
- O layout deve manter coerência visual com as práticas anteriores.
4. Renderize o componente da página de Login no arquivo `App.jsx`.

**3️⃣ Execução e teste**
1. No terminal, acesse a pasta do projeto.
```bash
cd praticas/aluno-online-react
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
5. Realize os testes:
- Submissão com campos vazios ou preenchidos de forma errada;
- Atualização dos valores ao digitar;
- Exibição correta das mensagens de erro;
- Ausência de recarregamento da página;
- Se não há erros no console do navegador.

4️⃣ **Checklist antes de enviar**
- [ ] Branch criada a partir da develop
- [ ] Componentes recebem `props` corretamente
- [ ] Estados utilizados apenas em `Login.jsx`
- [ ] Evento onSubmit implementado
- [ ] Uso correto de `event.preventDefault()`
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão e grave suas alterações. Substitua `#ID` pelo número da Issue (ex.: 10).
```bash
git add .
git commit -m "feat: conclui pratica05. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica05
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, implementei o tratamento de eventos na página de Login utilizando React. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino para o professor.

⚠️ **Erros comuns**
- Criar a branch de trabalho a partir de uma branch diferente da indicada na atividade;
- Não passar `props` para o input;
- Esquecer de utilizar `event.preventDefault()` no submit;
- Importar componente com caminho incorreto;
- Esquecer de iniciar o Docker;
- Enviar PR para a branch errada.