---
name: "Prática 01"
about: "Template para criar a issue da pratica01"
title: "[Prática 01] – Engenharia de Layout com HTML5 e CSS3"
labels: ["pratica01"]
assignees: ''
---

## 📌 Contexto
Uma instituição está modernizando o portal **Aluno Online**. A versão atual da página foi construída utilizando apenas `<div>` para toda a estrutura da página.

Com o crescimento do sistema, surgiram problemas como dificuldade de manutenção, código pouco legível, estrutura não semântica, falta de acessibilidade e layout pouco adaptável a diferentes telas.

Você faz parte da equipe responsável por propor e implementar uma nova estrutura para a Dashboard.

## ❓ Problema Norteador
Como reestruturar uma página construída apenas com `<div>` para que ela se torne semântica, organizada, responsiva, escalável e
alinhada às boas práticas modernas de HTML5 e CSS3?

## 🎯 Objetivo
Nesta prática, você irá:
- Tomar decisões estruturais utilizando HTML5 semântico;
- Utilizar Flexbox e CSS Grid de forma adequada ao problema;
- Implementar responsividade com estratégia Mobile-First;
- Trabalhar utilizando fluxo real com GitHub (Issue, branch e Pull Request).

## 🖼️ Referência Visual
Utilize as imagens abaixo como guia estrutural:

![Tela de Dashboard para Mobile](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/dashboard-mobile.png)

![Tela de Dashboard para Desktop](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/dashboard-desktop.png)

A implementação não precisa ser idêntica visualmente, mas deve respeitar a organização e hierarquia de informações.

## 📝 Instruções da Atividade
1️⃣ **Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Abra um terminal e certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica01
```

2️⃣ **Implementação do código**
1. No painel esquerdo do VSCode, localize a pasta `aluno-online-vanilla`.
2. Desenvolva a estrutura no arquivo `index.html`.
3. Organize a página utilizando:
- **Menu lateral (Sidebar)**: Estruture uma área para navegação contendo o nome do sistema e os links do menu;
- **Área principal da página**: Estruture o conteúdo principal da dashboard;
- **Barra superior (Topbar)**: Área com saudação e avatar do usuário;
- **Blocos de conteúdo**: Mural de Avisos, Calendário Acadêmico e Minhas Disciplinas.
4. Requisitos obrigatórios:
- Apenas um `<h1>` na página;
- Hierarquia correta de títulos;
- Imagens com atributo alt.
5. Desenvolva os estilos no arquivo `style.css`.
6. Defina as variáveis CSS `--cor-fundo: #e9e9e9` e `--cor-texto: #303030`.
7. Defina a tipografia padrão: `font-family`, `font-weight` e `line-height`.
8. Aplique o reset básico de `margin`, `padding` e `box-sizing`.
9. Utilize Flexbox para:
- Organizar o menu lateral e o conteúdo principal;
- Definir largura fixa da *sidebar* em telas maiores;
- Permitir que a área principal ocupe o espaço restante;
- Alinhar horizontalmente os elementos da *topbar* com `space-between`.
10. Organize os blocos com CSS Grid da seguinte forma:
- **Mobile**: Exibir 1 cartão. por linha;
- **Desktop**: Exibir até 2 cartões por linha.
11. Estilize os *cards* com borda, espaçamento interno e cantos arredondados.
12. Desenvolva primeiro a versão mobile.
- Utilize `@media` para ajustar a disposição dos elementos para telas maiores que `768 px`:
- Avalie a necessidade de alterar a direção do `flex`;
- Garanta que os elementos não fiquem comprimidos ou sobrepostos.

3️⃣ **Execução e teste**
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
5. Verifique se a página carrega corretamente e se a estrutura está organizada.
6. Redimensione a janela do navegador para verificar o comportamento responsivo da interface.

4️⃣ **Checklist antes de enviar**
- [ ] Branch criada a partir da develop
- [ ] Estrutura semântica implementada com as tags mais adequadas
- [ ] Estilização implementada com Flexbox e CSS Grid
- [ ] Responsividade funcional
- [ ] Variáveis CSS utilizadas nos estilos
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão e grave suas alterações. Substitua `#ID` pelo número da Issue (ex.: 10).
```bash
git add .
git commit -m "feat: conclui pratica01. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica01
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, implementei a estrutura da página Dashboard utilizando HTML5 semântico, Flexbox, CSS Grid e estratégia Mobile-First. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino para o professor.

⚠️ **Erros comuns**
- Criar a branch de trabalho a partir de uma branch diferente da indicada na atividade;
- Utilizar múltiplos `<h1>`;
- Usar `<div>` em excesso;
- Organizar cartões com Flexbox em vez de Grid;
- O layout não estar responsivo;
- Esquecer de iniciar o Docker;
- Enviar PR para a branch errada.