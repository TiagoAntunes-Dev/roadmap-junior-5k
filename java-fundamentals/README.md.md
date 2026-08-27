# ☕ Java: Fundamentos & Orientação a Objetos

Este repositório funciona como um diário de bordo e um laboratório prático para o estudo da linguagem Java. O foco principal não é apenas armazenar sintaxe, mas documentar a lógica arquitetural, a transição de paradigmas e o funcionamento do motor do Java por trás dos panos.

## 🎯 Objetivo do Repositório
Mapear a transição de um ecossistema focado em JavaScript/Node.js para a estrutura de tipagem estática e Orientação a Objetos clássica do Java, consolidando os pilares necessários para o desenvolvimento backend robusto.

## 📚 Conceitos Dominados (Até o momento)

Ao longo dos testes e projetos neste repositório, os seguintes conceitos lógicos e estruturais foram aplicados:

### 1. Tipagem Forte e Variáveis
* Diferenciação e aplicação de tipos primitivos vitais: `int`, `double` e `char`.
* Uso de classes base como `String`.
* Regras de sintaxe estrita (como o uso de aspas simples `''` para `char` e duplas `""` para `String`).

### 2. Entrada, Saída e Conversão de Dados (Parsing)
* **Terminal:** Interação via console utilizando a classe `Scanner` e gerenciamento de recursos (`.close()`).
* **GUI (Interfaces Gráficas):** Criação de pop-ups interativos com `JOptionPane` (`showInputDialog` e `showMessageDialog`).
* **Parsing:** O conceito crucial de conversão explícita de tipos (ex: `Integer.parseInt()`) para transformar dados textuais em numéricos com segurança matemática.

### 3. Operações e Aleatoriedade
* Matemática básica e operadores de atribuição aumentada (`+=`, `-=`, etc).
* Geração de números pseudo-aleatórios utilizando a classe `Random` (RNG), com entendimento de limites inclusivos e exclusivos para simulações e lógicas de negócio.

### 4. Controle de Fluxo e Laços de Repetição
* **Break e Continue:** Domínio sobre a interrupção total (`break`) ou o salto de iterações específicas (`continue`) dentro de loops, otimizando o processamento.
* **Nested Loops (Laços Aninhados):** Compreensão da lógica de engrenagem (o laço interno roda por completo para cada volta do laço externo), essencial para matrizes e algoritmos de ordenação.

### 5. Métodos e Princípio D.R.Y.
* Isolamento de blocos de código para evitar repetição (Don't Repeat Yourself).
* **Method Overload (Sobrecarga):** Criação de múltiplos métodos com o mesmo nome, alterando apenas a *assinatura* (parâmetros), delegando ao Java a inteligência de escolher o fluxo correto de execução.

### 6. Orientação a Objetos (POO)
* **Classes vs. Objetos:** Separação clara entre a "planta baixa" (Classe) e a instância física na memória (Objeto).
* **Atributos e Construtores:** Inicialização de estado no momento em que o objeto nasce.
* **A palavra-chave `this`:** Isolamento de contexto para referenciar os atributos da própria instância.
* **Arquitetura de Pacotes:** Organização espacial do projeto, isolando domínios (ex: `MyFirstProject` vs `MyFirstProject.Rodas`) e utilizando `imports` para conectar o sistema.

## 🛠️ Tecnologias e Ferramentas
* **Linguagem:** Java
* **Conceitos Chave:** POO, Tipagem Estática, D.R.Y, Parsing.

## Projetos Práticos (Mini-Apps)

Para fixar a teoria, desenvolvi os seguintes pequenos projetos aplicando os conceitos acima:

* **CalculatorProgram / Project_Calculator:** Uma calculadora interativa para realizar operações matemáticas básicas via terminal.
* **TemperatureProject:** Conversor prático de unidades de temperatura (ex: Celsius para Fahrenheit).
* **WeightConverter:** Sistema simples para conversão de medidas de peso.
* **Shopping_Cart_Program:** Lógica inicial de um carrinho de compras, lidando com itens, quantidades e cálculos de totais.
* **MadsLibs:** Um jogo interativo de preenchimento de palavras, trabalhando intensamente com concatenação de Strings e entrada de dados do usuário.

---
*Construindo a base, um arquivo compilado por vez.*