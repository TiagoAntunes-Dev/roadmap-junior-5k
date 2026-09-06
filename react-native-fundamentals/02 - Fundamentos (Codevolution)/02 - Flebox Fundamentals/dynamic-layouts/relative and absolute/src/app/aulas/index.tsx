import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function AulasIndex() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Índice de Aulas</Text>

      {/* ===================== 1 — FUNDAMENTOS GERAIS ===================== */}
      <Text style={styles.sectionTitle}>1. Dynamic - Layout</Text>

      <Link href="/aulas/relative_and_absolute" style={styles.card}>
        <Text style={styles.text}> Relative and Absolute</Text>
      </Link>

      <Link href="/aulas/dynamic_user_ui" style={styles.card}>
        <Text style={styles.text}> Dynamic User (UI)</Text>
      </Link>

      <Link href="/aulas/dimensions_drawback" style={styles.card}>
        <Text style={styles.text}> Dimensions Drawback (API)</Text>
      </Link>

       <Link href="/aulas/use_win_dimensions" style={styles.card}>
        <Text style={styles.text}> use Window Dimensions</Text>
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
