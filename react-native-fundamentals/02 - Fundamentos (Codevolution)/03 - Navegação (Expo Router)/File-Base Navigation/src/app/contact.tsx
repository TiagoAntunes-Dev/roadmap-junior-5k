import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

// ---------------------------------------------------------------------
// FILE-BASED ROUTING — este arquivo é a rota "/contact"
// ---------------------------------------------------------------------
// Por este arquivo se chamar "contact.tsx" e estar dentro da pasta
// "app/", o Expo Router automaticamente cria a rota "/contact" pra ele.
// Não existe nenhuma configuração extra em outro lugar — é só o nome
// do arquivo mesmo que define a URL.
//
// Se um dia você quisesse uma sub-rota, tipo "/contact/form", bastaria
// criar uma pasta "contact/" com um arquivo "form.tsx" dentro.
export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>


      {/*
        Aqui os <Link> apontam de volta para as outras rotas do app:
        - href="/"        -> volta pro arquivo "index.tsx" (Home)
        - href="/about"   -> vai para o arquivo "about.tsx"

        Repare que a navegação entre arquivos/rotas é sempre feita via
        <Link href="..."> (ou, de forma programática, via router.push()
        do próprio expo-router) — nunca importando o componente da
        outra tela diretamente.
      */}
      <Link href="/" style={styles.link}>Index Page</Link>
      <Link href="/about" style={styles.link}>About Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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