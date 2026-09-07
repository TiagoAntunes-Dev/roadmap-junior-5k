# 🃏 Doro : Monsta Cardo

App mobile feito com **Expo + React Native**, criado como exercício de estudo pra praticar componentização, props e estilização (Flexbox, Platform-specific styling) construindo um card de carta de Yu-Gi-Oh reutilizável.

---

## 📖 Sobre o projeto

O objetivo é renderizar um componente de carta (`YugiohCard`) totalmente reutilizável, que recebe os dados da carta via props e monta o layout visual — nome, nível, imagem, tipo, atributo, ATK/DEF e descrição — no estilo de uma carta real do jogo.

---

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── _layout.tsx        # Stack navigator, define o título da tela
│   ├── index.tsx          # Tela inicial — monta os dados da carta e renderiza o YugiohCard
│   └── components/
│       └── YugiohCard.js  # Componente reutilizável do card
└── assets/
    └── cards/              # Imagens das cartas (artes/ilustrações)
```

---

## 🧩 Componente `YugiohCard`

Recebe as seguintes props:

| Prop | Tipo | Descrição |
|---|---|---|
| `name` | string | Nome da carta |
| `type` | string | Tipo do monstro (ex: Spellcaster) |
| `attribute` | string | Atributo (ex: DARK, LIGHT) |
| `level` | number | Nível/estrelas da carta |
| `attack` | number | Pontos de ataque (ATK) |
| `defense` | number | Pontos de defesa (DEF) |
| `description` | string | Texto descritivo da carta |
| `image` | ImageSource | Imagem da carta (`require(...)` de um arquivo local) |

Exemplo de uso:

```tsx
const darkMagicianCard = {
  name: "Dark Magician",
  type: "Spellcaster",
  attribute: "DARK",
  level: 7,
  attack: 2500,
  defense: 2100,
  description: "The Ultimate Wizard in terms of Attack and Defense.",
  image: require("@/cards/monsters/Dark-Magician.png"),
};

<YugiohCard {...darkMagicianCard} />
```

---

## 🛠️ Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- App **Expo Go** no celular (Android/iOS)

### Passos

```bash
npm install
npx expo start
```

Escaneia o QR Code que aparece no terminal com o Expo Go (celular na mesma rede Wi-Fi do computador).

---

## 🎨 Design do card

- Borda dourada, remetendo à borda de uma carta física
- Nome + nível numa linha (nível alinhado à direita)
- Imagem em destaque, com `resizeMode="contain"` pra nunca cortar a arte
- Tipo e Atributo como badges (preto e roxo)
- ATK/DEF numa barra cinza, separados por uma linha divisória central
- Descrição em itálico, com uma linha fina separando do resto do card
- Sombra nativa por plataforma (`shadowColor` no iOS, `elevation` no Android), via `Platform.select()`
