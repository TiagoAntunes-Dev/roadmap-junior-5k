import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

// ---------------------------------------------------------------------
// FILE-BASED ROUTING — este arquivo é a rota "/about"
// ---------------------------------------------------------------------
// Mesma lógica do contact.tsx: o nome do arquivo ("about.tsx") dentro
// da pasta "app/" já define a rota "/about" automaticamente, sem
// precisar declarar essa tela em nenhum lugar separado.
//
// Fluxo completo de navegação deste projeto:
//
//   "/"  (index.tsx)  <--->  "/about"  (about.tsx)  <--->  "/contact" (contact.tsx)
//
// Cada tela tem <Link> apontando pras outras, formando essa "teia" de
// navegação — tudo resolvido só pela estrutura de arquivos.
export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>


      <Link href="/" style={styles.link}>Back Home Page</Link>
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

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
});