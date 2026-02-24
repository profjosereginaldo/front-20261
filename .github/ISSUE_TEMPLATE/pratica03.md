---
name: "Prática 03"
about: "Template para criar a issue da pratica03"
title: "[Prática 03] – Componentização Estrutural com React"
labels: ["pratica03"]
assignees: ''
---

## 📌 Contexto
O portal **Aluno Online** está sendo expandido. Além da Dashboard, o sistema agora contará com as telas Listagem de Faltas, Listagem de Notas, Listagem de Boletos e Listagem de Requerimentos.

No modelo atual (HTML/CSS/JS tradicional), cada nova tela exigiria duplicação da estrutura base (menu, topo e layout principal). Isso aumenta o acoplamento, a duplicação de código, o custo de manutenção e o risco de inconsistência visual.

A equipe decidiu migrar para React adotando uma arquitetura baseada em componentes reutilizáveis. Você é responsável por propor essa arquitetura.

## ❓ Problema Norteador
Como estruturar múltiplas telas em React evitando duplicação de layout e mantendo organização escalável?

## 🎯 Objetivo
Nesta prática, você irá:
- Migrar o projeto para React;
- Criar múltiplas páginas;
- Quebrar a interface em componentes estruturais;
- Separar layout base e conteúdo;
- Evitar duplicação estrutural;
- Organizar o projeto de forma escalável.

## 🖼️ Referência Visual
Utilize como guia as seguintes telas:

- Dashboard ([Mobile](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/dashboard-mobile.png) e [Desktop](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/dashboard-desktop.png))
- Faltas ([Mobile](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/faltas-mobile.png) e [Desktop](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/faltas-desktop.png))
- Notas ([Mobile](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/notas-mobile.png) e [Desktop](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/notas-desktop.png))
- Boletos ([Mobile](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/boletos-mobile.png) e [Desktop](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/boletos-desktop.png))
- Requerimentos ([Mobile](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/requerimentos-mobile.png) e [Desktop](https://raw.githubusercontent.com/profjosereginaldo/front-template/refs/heads/main/assets/requerimentos-desktop.png))

## 📝 Instruções da Atividade
**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Abra um terminal e certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica03
```

**2️⃣ Implementação do código**
1. No painel esquerdo do VSCode, localize a pasta `aluno-online-react`.
2. Desenvolva da seguinte forma: 
- Deve existir separação entre componentes estruturais (layout) e páginas (conteúdo);
- Cada componente/página deve ser criado como função;
- Cada componente/página deve estar em arquivo próprio;
- Cada componente/página deve possuir seu próprio arquivo CSS;
- Não há uso de `props` e `state` nesta etapa.
3. Renderize uma página por vez no `App.jsx` para testes.

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
5. Teste as diferentes variações visuais e verifique:
- Se todos os componentes estão sendo renderizados corretamente;
- Se a organização do layout corresponde à referência visual;
- Se não há erros no console do navegador.

4️⃣ **Checklist antes de enviar**
- [ ] Branch criada a partir da develop
- [ ] Componentes estruturais implementados
- [ ] Páginas criadas e renderizadas corretamente
- [ ] Cada componente possui arquivo próprio
- [ ] Cada componente possui CSS próprio
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão e grave suas alterações. Substitua `#ID` pelo número da Issue (ex.: 10).
```bash
git add .
git commit -m "feat: conclui pratica03. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica03
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, implementei a componentização estrutural com React. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino para o professor.

⚠️ **Erros comuns**
- Criar a branch de trabalho a partir de uma branch diferente da indicada na atividade;
- Criar múltiplos componentes dentro do mesmo arquivo;
- Não separar CSS por responsabilidade;
- Importar componente com caminho incorreto;
- Renderizar múltiplos elementos sem um contêiner pai;
- Esquecer de iniciar o Docker;
- Enviar PR para a branch errada.