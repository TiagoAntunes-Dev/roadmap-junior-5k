import { StyleSheet, Text, View, Image } from "react-native";
// Link é o componente de navegação do Expo Router — funciona parecido
// com a tag <a> da web, mas sem recarregar a página/app.
import { Link } from "expo-router";

// ---------------------------------------------------------------------
// FILE-BASED ROUTING (roteamento baseado em arquivos) — Expo Router
// ---------------------------------------------------------------------
// O Expo Router usa a ESTRUTURA DE PASTAS/ARQUIVOS dentro da pasta
// "app/" para definir as rotas (telas) do seu aplicativo automaticamente.
// Você NÃO precisa configurar um "Navigator" na mão (como no
// React Navigation tradicional) — o próprio nome e local do arquivo
// já vira a URL/rota.
//
// Exemplo, considerando este projeto:
//
//   app/
//   ├── index.tsx     -> rota "/"        (tela inicial, este arquivo)
//   ├── about.tsx      -> rota "/about"
//   └── contact.tsx    -> rota "/contact"
//
// Ou seja:
// - "index.tsx" é especial: ele sempre representa a rota RAIZ ("/")
//   da pasta onde está (igual "index.html" na web).
// - Qualquer outro arquivo, ex: "about.tsx", vira automaticamente a
//   rota com o mesmo nome: "/about".
//
// Isso é bem diferente do React Navigation "puro", onde você declara
// manualmente cada tela dentro de um <Stack.Navigator> / <Tab.Navigator>.
// Aqui, a pasta "app/" É o seu mapa de navegação.
export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

      <View style={styles.card}>
        <Text>Hello, this is a card.</Text>
      </View>

      {/*
        <Link href="..."> navega para outra rota. O valor de "href"
        precisa bater com o CAMINHO/NOME do arquivo dentro de "app/".

        Aqui, href="/about" navega para o arquivo "about.tsx", e
        href="/contact" navega para o arquivo "contact.tsx".

        Assim como o <Link> do Next.js (que também usa file-based
        routing), a navegação acontece sem recarregar tudo do zero —
        só a tela muda.
      */}
      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
});