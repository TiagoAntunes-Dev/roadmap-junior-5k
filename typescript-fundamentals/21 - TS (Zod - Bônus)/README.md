# 🛡️ TypeScript + Zod — Validação de Dados na Prática

Repositório de exercícios focados em **validação e tipagem de dados** com [Zod](https://zod.dev/), aplicando desde esquemas simples até transformações condicionais e inferência automática de tipos com TypeScript.

Faz parte do meu roadmap de estudos de TypeScript, com foco em entender **o porquê** de cada decisão — não só reproduzir código, mas testar variações e casos de borda (`safeParse` com dados válidos e inválidos, mensagens de erro customizadas, etc).

---

## 🚀 Tecnologias

- **TypeScript**
- **[Zod](https://zod.dev/)** — validação de esquemas e inferência de tipos
- **ts-node** — execução direta dos arquivos `.ts` sem precisar compilar

---

## 📦 Como rodar

```bash
# instalar dependências
npm install

# rodar um exercício específico
npx ts-node "21 - TS (Zod - Bônus)/01-simple-validation.ts"
```

---

## 📚 Exercícios

| Nº | Tema | Conceitos Zod |
|----|------|----------------|
| 1 | Validação simples de string (nome de usuário) | `z.string()`, `.min()`, `.max()` |
| 2 | Validação de objeto (cadastro de usuário) | `z.object()`, `.email()`, campos opcionais |
| 3 | Arrays e validações aninhadas (carrinho de compras) | `z.array()`, `z.object()` aninhado, `.uuid()` |
| 4 | Transformação de dados (pedido de pizza) | `.transform()`, `z.enum()`, cálculo derivado |
| 5 | Validações condicionais (cadastro de dev) | `.refine()`, regras cruzadas entre campos |
| 6 | Inferência de tipos (bônus) | `z.infer`, `z.input`, `z.output` |

### 1️⃣ Validação Simples
Esquema para validar um nome de usuário:
- String obrigatória
- Mínimo de 3 caracteres, máximo de 20

### 2️⃣ Validações de Objetos
Esquema de cadastro com:
- `e-mail` válido
- `idade` entre 18 e 100
- `apelido` opcional (mínimo 2 caracteres, se enviado)

### 3️⃣ Arrays e Validações Aninhadas
Esquema de carrinho de compras:
- `clientId` no formato UUID
- `products`: array de objetos, cada um com nome, preço, quantidade e categorias (mínimo 1)

### 4️⃣ Transformações de Dados (`transform`)
Esquema de pedido de pizza onde o **preço não é enviado pelo cliente** — é calculado automaticamente a partir do tamanho (`P`, `M`, `G`) e da quantidade de itens extras (+R$5 cada).

### 5️⃣ Validações Condicionais (`refine`)
Cadastro de desenvolvedor com uma regra cruzada: se `level` for `"Senior"`, o candidato precisa ter **no mínimo 5 anos de experiência E pelo menos 2 tecnologias** no array — validado com `.refine()`.

### 6️⃣ Tipagem de Dados (Bônus)
Demonstração de como extrair tipos TypeScript automaticamente a partir de um schema Zod:
- `z.infer` → tipo padrão de saída
- `z.input` → formato exigido na entrada (antes do `transform`)
- `z.output` → formato retornado na saída (depois do `transform`)
- Extração do tipo de uma propriedade específica (ex: `Type['username']`)

---

## 🧠 Principais aprendizados

- Diferença entre **validação de schema** e **transformação de dados** (`transform` roda depois da validação passar)
- `.refine()` permite regras que dependem de mais de um campo ao mesmo tempo
- `z.input` e `z.output` só divergem quando o schema tem `.transform()` no meio do caminho
- `safeParse()` é mais seguro que `parse()` em fluxos de formulário, pois não lança exceção — retorna `{ success, data }` ou `{ success, error }`

---

## 📂 Estrutura

```
21 - TS (Zod - Bônus)/
├── 01-simple-validation.ts
├── 02-object.ts
├── 03-arrays.ts
├── 04-example-transform.ts
├── 05-transforming-data.ts
├── 06-refine-basics.ts
├── 07-refine-advanced.ts
├── 08-tipagem-data.ts
├── index.ts
├── package.json
└── tsconfig.json
```
---

## ✍️ Autor

**Tiago Antunes**
Estudante de Tecnologia em Sistemas para a Internet — Centro Universitário Senac SP
[GitHub](https://github.com/TiagoAntunes-Dev)