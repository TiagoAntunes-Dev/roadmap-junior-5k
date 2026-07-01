# 🚀 TypeScript: Setup e Comandos Essenciais

Este documento serve como um guia rápido para a instalação do TypeScript e para os comandos diários utilizados no terminal do VS Code durante o desenvolvimento.

---

## ⚙️ 1. Pré-requisitos

Antes de instalar o TypeScript, é obrigatório ter o **Node.js** instalado na sua máquina. O Node traz consigo o `npm` (Node Package Manager), que será o responsável por baixar o pacote do TypeScript.

Para verificar se o seu ambiente já está pronto, abra o terminal e cheque as versões:
```bash
node -v
npm -v
```

---

## 📦 2. Instalação do TypeScript

Para instalar o compilador do TypeScript globalmente no seu computador (permitindo o uso do comando `tsc` em qualquer pasta), rode o seguinte comando no terminal:

```bash
npm install -g typescript
```

*Para confirmar que a instalação foi um sucesso, verifique a versão instalada:*
```bash
tsc -v
```

---

## 🛠️ 3. Comandos do Dia a Dia no Terminal

O código escrito em TypeScript (`.ts`) não é lido nativamente pelos navegadores ou pelo Node. Ele precisa passar por um processo de **compilação** (tradução) para gerar um arquivo JavaScript puro (`.js`). 

Abaixo estão os comandos essenciais para esse ciclo de vida:

### Inicializar as Configurações (`tsconfig.json`)
```bash
tsc --init
```
* **O que faz:** Cria o arquivo de configuração central do projeto. É nele que ativamos o modo estrito e definimos as regras de segurança e compilação do TypeScript.

### Compilar Todo o Projeto
```bash
tsc
```
* **O que faz:** O comando puro varre a pasta do projeto, lê as regras do `tsconfig.json` e traduz todos os arquivos `.ts` para `.js` de forma segura.

### Compilação Automática (Watch Mode)
```bash
tsc -w
```
* **O que faz:** Liga o "modo vigia". O terminal fica travado monitorando a pasta. Toda vez que você salva um arquivo TypeScript (`Ctrl + S`), ele compila e atualiza o arquivo JavaScript automaticamente em tempo real.

### Executar o Código
```bash
node nome-do-arquivo.js
```
* **O que faz:** Executa o arquivo **JavaScript** final gerado pelo compilador para que você possa ver a saída e os resultados no terminal.

---

## ⚠️ Ponto de Atenção

Evite compilar arquivos passando o nome deles diretamente no terminal (ex: `tsc app.ts`). Ao fazer isso, o compilador **ignora** as regras de segurança configuradas no seu `tsconfig.json`. Sempre prefira rodar apenas `tsc` ou `tsc -w`.