import { StyleSheet, Text, View } from 'react-native';

export default function ShadowElevation() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Testando Elevation no Android</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#e0e0e0", // Fundo claro para contrastar bem a sombra
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 250,
    height: 250,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    // Propriedade exclusiva do Android para projetar a sombra:
    elevation: 12, 
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  }
});