# ⚛️ React Native Fundamentals

Bem-vindo ao repositório de **Fundamentos do React Native**. Este espaço é dedicado ao estudo e documentação dos conceitos essenciais para o desenvolvimento de aplicativos mobile nativos utilizando o ecossistema moderno do Expo e TypeScript.

---

## 📖 O que é o React Native e para que serve?

O **React Native** é um framework criado pela Meta (Facebook) que permite criar aplicativos móveis nativos para Android e iOS usando uma **única base de código** em JavaScript ou TypeScript.

Ele serve para resolver o maior problema do desenvolvimento mobile tradicional: a necessidade de criar o mesmo aplicativo duas vezes (uma vez em Swift/Objective-C para iOS e outra em Java/Kotlin para Android).

**Como funciona a mágica?**

No React Native, nós escrevemos códigos usando componentes "agnósticos" (universais). Quando o aplicativo é compilado, o framework traduz esses componentes para os elementos nativos reais do celular. Por exemplo, uma tag `<View>` escrita no código vira uma `ViewGroup` nativa no Android e uma `UIView` nativa no iPhone. O resultado é um aplicativo com performance e interface 100% nativas.

---

## 🧠 O que aprenderemos neste repositório?

Este repositório documenta a jornada de aprendizado desde a base até a componentização avançada:

1. **Estrutura de Arquivos:** Entendendo como o Expo organiza o projeto e o papel da pasta `app` (Expo Router).
2. **Componentes Core:** Domínio dos blocos de construção essenciais: `<View>`, `<Text>`, `<TextInput>`, `<Image>` e `<ScrollView>`.
3. **Estilização (StyleSheet):** Como aplicar conceitos de CSS e Flexbox (que já vem ativado por padrão) no ambiente mobile.
4. **Estado e Interatividade:** O uso do `useState` para refletir as ações do usuário (como digitar em um input) em tempo real na tela.
5. **Componentização e TypeScript:** Como criar nossos próprios componentes (ex: `<Button>`, `<Input>`), definir tipagens rigorosas (`interfaces` e `types`) e utilizar o operador `...rest` para criar componentes dinâmicos e reutilizáveis.
6. **Lidando com o Teclado:** O uso do `<KeyboardAvoidingView>` para melhorar a UX em formulários.

---

## 🛠️ Como criar e rodar um aplicativo React Native (Expo)

O **Expo** é o framework oficial recomendado para iniciar projetos React Native hoje em dia. Ele abstrai toda a configuração complexa, permitindo que você veja o código rodando no seu próprio celular em segundos.

### Passo 1: Pré-requisitos

*   Tenha o **[Node.js](https://nodejs.org/)** instalado no seu computador.
*   Baixe o aplicativo **Expo Go** no seu smartphone (disponível na Play Store e App Store).

### Passo 2: Criando o projeto do zero

No terminal do seu computador, navegue até a pasta onde deseja criar o projeto e rode o comando abaixo. Ele criará um projeto em branco utilizando as melhores práticas (Navegação embutida e TypeScript):

```bash
npx create-expo-app@latest --template
```

*Siga as instruções na tela e escolha um nome para o seu app.*

### Passo 3: Iniciando o Servidor (Metro Bundler)

Entre na pasta do projeto que acabou de ser criada e inicie o servidor:

```bash
cd nome-do-seu-app
npx expo start
```

*Um QR Code gigante aparecerá no seu terminal.*

### Passo 4: Criando um arquivo base rapidamente (snippet `rfnes`)

Com a extensão **ES7+ React/Redux/React-Native Snippets** instalada no VS Code, basta criar um arquivo `.tsx` vazio, digitar `rfnes` e apertar `Tab` — isso gera automaticamente o esqueleto de um componente funcional com `StyleSheet.create` já pronto, evitando digitar tudo na mão toda vez.
