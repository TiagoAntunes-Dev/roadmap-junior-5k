<div align="center">
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/Status-Roadmap%20Ativo-success?style=for-the-badge" alt="Status" />
</div>

# 🐘 PHP Fundamentals

> *Laboratórios práticos e documentação de base para o meu roadmap de Back-End.*

Este repositório documenta a minha transição do Front-End estático para o **desenvolvimento dinâmico no lado do servidor**. O objetivo aqui é dominar a lógica de programação, o protocolo HTTP, a manipulação de dados de formulários e a comunicação segura antes de avançar para a integração com Bancos de Dados.

---

## 🗂️ Estrutura do Roadmap

Cada capítulo representa um degrau na construção do pensamento lógico focado em Back-End, evoluindo de simples variáveis até a construção de mini-sistemas.

| Lab | Capítulo / Pasta | Assunto e Conceitos-Chave |
|:---:|:---|:---|
| **01** | ⚙️ **Creating Files on XAMPP** | Configuração do ambiente local, servidor Apache e a estrutura de execução de arquivos `.php`. |
| **02** | 📦 **Variables** | Tipos de dados, declaração (`$`), escopo e o comportamento de tipagem do PHP. |
| **03** | 🧮 **Arithmetics & Super Global** | Operações matemáticas base e introdução ao poderoso arsenal de variáveis Super Globais. |
| **04** | 🌐 **Get and Post** | O protocolo HTTP na prática: Como trafegar dados da URL e de formulários com `$_GET` e `$_POST`. |
| **05** | 🛡️ **How to Handle Data** | Segurança em primeiro lugar: Sanitização, validação e manipulação do input do usuário. |
| **06** | ⚖️ **Operators** | Operadores lógicos (`&&`, `||`), de comparação (`==`, `===`), incremento e atribuição. |
| **07** | 🧠 **Control Structures** | O cérebro do script: Tomada de decisão com `if/else`, `switch` e laços de repetição (`while`, `for`, `foreach`). |
| **08** | 🛠️ **Exercises (Built Calculator)** | **Projeto Prático:** Unindo formulários, variáveis e controle de fluxo para criar uma calculadora funcional. |
| **09** | 📚 **Arrays** | Manipulação de coleções de dados: Arrays indexados, associativos e multidimensionais. |
| **10** | 🧩 **Built-in (Functions)** | Explorando as funções nativas do núcleo do PHP para manipulação de strings, matemática e arrays. |

---

## 🚀 Como Executar e Testar

Diferente do HTML e CSS, o código PHP **não roda abrindo o arquivo direto no navegador**. Ele precisa de um servidor para interpretar a lógica antes de devolver a tela ao usuário.

Para testar os scripts deste repositório:

1. Certifique-se de ter o **XAMPP** (ou servidor equivalente como WAMP/MAMP) instalado.
2. Inicie o módulo **Apache** no painel de controle do XAMPP.
3. Clone ou copie as pastas deste repositório para dentro do diretório raiz do seu servidor local:
   * **Windows:** `C:\xampp\htdocs\`
   * **Mac:** `/Applications/XAMPP/htdocs/`
4. Abra o seu navegador e acesse: `http://localhost/nome-da-pasta/` (ajustando para o nome exato da pasta onde você salvou os arquivos).

> 💡 **Dica de Engenharia:** Explore o código-fonte dos arquivos `.php`. Tentei comentar não apenas o que a função faz, mas o cenário real onde ela seria aplicada em um sistema web (ex: validação de login, processamento de carrinhos de compra).

---
<div align="center">
  Feito com 🧠 e bastante <code>;</code> esquecido pelo caminho (e no PHP eles não perdoam!).
</div>