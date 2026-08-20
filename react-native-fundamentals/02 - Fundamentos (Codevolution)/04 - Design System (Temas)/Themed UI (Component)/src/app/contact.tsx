import { Link } from "expo-router";
import { StyleSheet } from "react-native";

// Mesmo padrão da página About: nenhuma lógica de tema aqui, só os
// componentes temáticos prontos (ThemedView/ThemedText) fazendo o
// trabalho por baixo dos panos.
import ThemedView from "@/components/themed_View";
import ThemedText from "@/components/themed_text";

export default function Contact() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Contact Page
      </ThemedText>

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