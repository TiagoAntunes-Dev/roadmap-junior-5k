import { Link } from "expo-router";
import { StyleSheet } from "react-native";

// -----------------------------------------------------------------------
// USANDO OS COMPONENTES TEMÁTICOS NA PÁGINA
// -----------------------------------------------------------------------
// Repare que este arquivo NÃO importa mais "useColorScheme" nem
// "Colors" — e não precisa mesmo! Essa é exatamente a vantagem que o
// professor destaca no vídeo: toda a lógica de tema fica escondida
// dentro do ThemedView/ThemedText, e a página só usa esses componentes
// prontos, sem se preocupar com light/dark aqui.
import ThemedView from "@/components/themed_View";
import ThemedText from "@/components/themed_text";

export default function About() {
  return (
    // No lugar de <View style={[styles.container, {backgroundColor: ...}]}>
    // (como era feito manualmente antes), agora é só <ThemedView>, que já
    // aplica a cor de fundo certa do tema por dentro.
    <ThemedView style={styles.container}>
      {/*
        title={true} faz esse texto usar a cor de TÍTULO do tema
        (theme.title), que é mais forte/contrastante que o texto normal.
      */}
      <ThemedText style={styles.title} title={true}>
        About Page
      </ThemedText>

      {/*
        Aqui o <ThemedText> fica DENTRO do <Link>, em vez do <Link> em
        si receber a cor. Isso faz sentido porque quem realmente
        precisa da cor do tema é o TEXTO — o Link só cuida da navegação.
      */}
      <Link href="/" style={styles.link}>
        <ThemedText>Home Page</ThemedText>
      </Link>
    </ThemedView>
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
    borderBottomWidth: 1,
  },
});