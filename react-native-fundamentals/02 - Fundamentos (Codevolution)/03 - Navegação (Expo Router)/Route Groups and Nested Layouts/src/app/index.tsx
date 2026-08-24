import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import ThemedView from "@/components/themed_View";
import ThemedText from "@/components/themed_text";
import ThemedLogo from "@/components/themed_logo";
import Spacer from "@/components/spacer";

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />

      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      {/*
        Repare que os href's aqui são "/login" e "/register" — SEM
        "/auth" na frente — mesmo os arquivos login.tsx e register.tsx
        estando dentro da pasta "app/(auth)/". É exatamente esse o
        efeito do route group: a pasta organiza os arquivos, mas não
        aparece na rota final.
      */}
      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
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
  img: {
    marginVertical: 20,
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