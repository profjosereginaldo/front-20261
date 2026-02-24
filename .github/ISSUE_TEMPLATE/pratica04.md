---
name: "Prática 04"
about: "Template para criar a issue da pratica04"
title: "[Prática 04] – Customização de Componentes com Props"
labels: ["pratica04"]
assignees: ''
---

## 📌 Contexto
Na prática anterior, você estruturou a aplicação **Aluno Online** utilizando componentes para organizar o layout e as páginas.

Entretanto, foi observado um novo problema. Alguns componentes apresentam pequenas variações visuais e de conteúdo, mas possuem estrutura praticamente idêntica.

Atualmente, essas variações estão sendo implementadas criando múltiplos componentes semelhantes, o que gera duplicação de código, aumenta o acoplamento, dificulta manutenção futura e compromete a escalabilidade.

A equipe decidiu refatorar a aplicação para permitir que os componentes possam ser configurados dinamicamente.

## ❓ Problema Norteador
Como tornar um componente reutilizável e configurável sem precisar criar múltiplas versões semelhantes?

## 🎯 Objetivo
Nestaa prática, você irá:
- Refatorar componentes existentes para torná-los configuráveis;
- Utilizar **props** para personalizar conteúdo e aparência;
- Eliminar duplicações estruturais;
- Centralizar variações em um único componente genérico.

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
git checkout -b feature/pratica04
```

**2️⃣ Implementação do código**
1. No painel esquerdo do VSCode, localize a pasta `aluno-online-react`.
2. Identifique componentes duplicados ou muito semelhantes;
3. Refatore criando uma versão genérica;
- Props devem ser utilizadas para personalizar conteúdo textual, informações exibidas e variações visuais;
- Não utilizar `state` nesta etapa.
4. Substitua os componentes específicos por chamadas ao componente parametrizado;
5. Renderize uma página por vez no `App.jsx` para testes.

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
- [ ] Componentes duplicados refatorados
- [ ] Uso correto de props
- [ ] Layout preservado
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão e grave suas alterações. Substitua `#ID` pelo número da Issue (ex.: 10).
```bash
git add .
git commit -m "feat: conclui pratica04. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica04
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, customizei componentes utilizando props. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino para o professor.

⚠️ **Erros comuns**
- Criar a branch de trabalho a partir de uma branch diferente da indicada na atividade;
- Não remover os componentes antigos;
- Importar componente com caminho incorreto;
- Renderizar múltiplos elementos sem um contêiner pai;
- Esquecer de iniciar o Docker;
- Enviar PR para a branch errada.