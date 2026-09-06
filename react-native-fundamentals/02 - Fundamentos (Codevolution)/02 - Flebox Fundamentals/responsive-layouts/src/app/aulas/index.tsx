import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function AulasIndex() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Índice de Aulas</Text>

      {/* ===================== 1 — FUNDAMENTOS GERAIS ===================== */}
      <Text style={styles.sectionTitle}>1. Fundamentos Gerais</Text>

      <Link href="/aulas/multipleStyles" style={styles.card}>
        <Text style={styles.text}>Multiple Styles</Text>
      </Link>

      <Link href="/aulas/boxModel" style={styles.card}>
        <Text style={styles.text}>Box Model</Text>
      </Link>

      <Link href="/aulas/style_inheritance" style={styles.card}>
        <Text style={styles.text}>Style Inheritance</Text>
      </Link>

      <Link href="/aulas/relative_and_absolute" style={styles.card}>
        <Text style={styles.text}>Relative and Absolute</Text>
      </Link>

      <Link href="/aulas/shadow_and_elevation" style={styles.card}>
        <Text style={styles.text}>Shadow and Elevation</Text>
      </Link>

      {/* ===================== 2 — FLEXBOX ===================== */}
      <Text style={styles.sectionTitle}>2. Flexbox</Text>

      <Link href="/aulas/layout_flexbox" style={styles.card}>
        <Text style={styles.text}>Layout Flexbox</Text>
      </Link>

      <Link href="/aulas/codeSetup" style={styles.card}>
        <Text style={styles.text}>Code Setup</Text>
      </Link>

      <Link href="/aulas/flex" style={styles.card}>
        <Text style={styles.text}>Flex</Text>
      </Link>

      <Link href="/aulas/flex-direction" style={styles.card}>
        <Text style={styles.text}>Flex - Direction</Text>
      </Link>

      <Link href="/aulas/justify_content" style={styles.card}>
        <Text style={styles.text}>Justify Content</Text>
      </Link>

      <Link href="/aulas/flex_wrap" style={styles.card}>
        <Text style={styles.text}>Flex Wrap</Text>
      </Link>

      <Link href="/aulas/gap" style={styles.card}>
        <Text style={styles.text}>Gap</Text>
      </Link>

      {/* ===================== 3 — ADVANCED (ALIGN) ===================== */}
      <Text style={styles.sectionTitle}>3. Advanced (Align)</Text>

      <Link href="/aulas/align_item" style={styles.card}>
        <Text style={styles.text}>Align Items</Text>
      </Link>

      <Link href="/aulas/align_self" style={styles.card}>
        <Text style={styles.text}>Align Self</Text>
      </Link>

      <Link href="/aulas/align_content" style={styles.card}>
        <Text style={styles.text}>Align Content</Text>
      </Link>

      <Link href="/aulas/flex_basis" style={styles.card}>
        <Text style={styles.text}>Flex Basis</Text>
      </Link>

      <Link href="/aulas/flex_shrink" style={styles.card}>
        <Text style={styles.text}>Flex Shrink</Text>
      </Link>

      <Link href="/aulas/flex_grow" style={styles.card}>
        <Text style={styles.text}>Flex Grow</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "stretch",
    textAlign: "center",
    marginBottom: 20,
  },
  // Título de cada seção/módulo — repete o número igual você usa nas
  // pastas do curso (1 - Fundamentos, 2 - Flexbox...), só pra manter a
  // mesma referência mental entre o código e a estrutura de pastas.
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "stretch",
    marginTop: 24,
    marginBottom: 10,
    color: "#555",
  },
  card: {
    alignSelf: "stretch",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: "#007AFF",
  },
});
