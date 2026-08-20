import { StyleSheet } from "react-native";
import { Link } from "expo-router";

// -----------------------------------------------------------------------
// HOMEPAGE — usando TODOS os componentes temáticos feitos nesta aula
// -----------------------------------------------------------------------
// Essa é a página onde o professor reúne tudo que foi construído:
// ThemedView (fundo), ThemedLogo (imagem que troca sozinha), Spacer
// (espaçamento sem estilos manuais) e ThemedText (texto colorido pelo
// tema, com variação title/normal).
import ThemedView from "@/components/themed_View";
import ThemedText from "@/components/themed_text";
import ThemedLogo from "@/components/themed_logo";
import Spacer from "@/components/spacer";

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      {/* ThemedLogo escolhe sozinho entre logo_dark.png e logo_light.png
          de acordo com o tema atual do sistema. */}
      <ThemedLogo />
      {/* Espaço entre o logo e o texto — no lugar de um "marginBottom"
          manual no estilo do logo, como era feito antes de existir o
          Spacer. */}
      <Spacer />

      {/* title={true} -> usa a cor de título (mais forte) do tema */}
      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>

      {/* Sem "title", cai na cor de texto normal do tema por padrão.
          Aqui o estilo inline só cuida do espaçamento (margin), a cor
          já vem de dentro do ThemedText. */}
      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      {/* Mesmo padrão da página About/Contact: ThemedText dentro do
          Link, pra herdar a cor certa do tema no texto do link. */}
      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>

      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
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