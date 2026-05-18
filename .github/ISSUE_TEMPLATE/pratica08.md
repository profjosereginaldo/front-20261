---
name: "Prática 08"
about: "Template para criar a issue da pratica08"
title: "[Prática 08] – Formulário de Cadastro com React Hook Form"
labels: ["pratica08"]
assignees: ''
---

## 📌 Contexto
A página de **Requerimentos** da aplicação Aluno Online já exibe informações, mas ainda é estática. Precisamos permitir que o aluno registre novas solicitações.

Trabalhar com formulários em React usando apenas `useState` para cada campo é funcional, mas conforme o formulário cresce, o código torna-se repetitivo e a performance cai devido ao excesso de renderizações a cada tecla pressionada.

Para resolver isso, a equipe decidiu adotar o **React Hook Form**, uma biblioteca focada em performance e simplicidade.

## ❓ Problema Norteador
Como criar formulários robustos que gerenciem múltiplos campos e validações complexas sem transformar o componente em uma "montanha" de estados manuais e renderizações desnecessárias?

## 🎯 Objetivo
Nesta prática, você irá:
- Implementar formulários performáticos com a biblioteca **React Hook Form**;
- Gerenciar o ciclo de vida de submissão (registro, captura e limpeza);
- Aplicar **validações declarativas** e mensagens de erro contextuais;
- Integrar componentes de formulário em páginas existentes.

## 🖼️ Referência Visual
Utilize como guia:

![Tela de Novo Requerimento](https://raw.githubusercontent.com/profjosereginaldo/tecweb-template/refs/heads/main/assets/novo-requerimento.png)

![Tela de Novo Requerimento com Validação](https://raw.githubusercontent.com/profjosereginaldo/tecweb-template/refs/heads/main/assets/novo-requerimento-validacao.png)

## 📝 Instruções da Atividade
**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica08
```

**2️⃣ Implementação do código**
1. No terminal, instale o pacote do React Hook Form;
2. Crie o componente `RequerimentoForm` em `src/forms`:
3. Implemente as seguintes restrições:
- **Tipo de Requerimento:** Obrigatório.
- **Descrição:** Obrigatório, mínimo de 10 caracteres para evitar descrições genéricas.
- O formulário deve exibir mensagens de erro e limpar os campos após um `console.log` de sucesso.
4. No arquivo de rotas, refatore a rota `/requerimentos` para aceitar rotas filhas criando uma rota para o seu novo formulário;
5. Na página `Requerimentos.jsx`, adicione um botão de destaque **"➕ Novo Requerimento"** que deve acessar o componente `RequerimentoForm`;

**3️⃣ Execução e teste**
1. Inicie o servidor de desenvolvimento (caso não esteja rodando):
```bash
docker compose exec app npm run dev
```
2. Acesse no navegador: `http://localhost:5173`.
3. Teste os seguintes cenários:
- Clique em `Salvar` sem preencher nenhum campo — todas as mensagens de erro devem aparecer;
- Preencha a descrição com menos de 10 caracteres e tente enviar — a mensagem de mínimo deve aparecer;
- Preencha todos os campos corretamente e envie — os dados devem aparecer no console e o formulário deve ser limpo;
- Verifique que não há erros no console do navegador.

**4️⃣ Checklist antes de enviar**
- [ ] Branch criada a partir da `develop`
- [ ] `react-hook-form` instalado
- [ ] Componente `RequerimentoForm` criado em `src/forms/`
- [ ] Validações configuradas em cada campo
- [ ] Mensagens de erro exibidas abaixo de cada campo inválido
- [ ] Formulário integrado à página de Requerimentos
- [ ] Formulário limpa os campos após submissão válida
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão. Substitua `#ID` pelo número da Issue.
```bash
git add .
git commit -m "feat: conclui pratica08. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica08
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, implementei o formulário de cadastro de requerimento com React Hook Form. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino.

⚠️ **Erros comuns**
- Esquecer de espalhar (*spread*) o retorno do `register`;
- Definir o evento `onSubmit` sem envolver com `handleSubmit`;
- Não definir a propriedade `message` nas regras de validação e tentar exibir `errors.campo.message`;
- Esquecer a opção `required: true` em vez de `required: "mensagem"`;
- Criar a branch de trabalho a partir de uma branch diferente da `develop`;
- Enviar o PR para a branch errada.