import { StyleSheet, Text, View } from 'react-native';

export default function StyleInheritanceDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Conceito de Style Inheritance</Text>

      {/* 
        EXEMPLO 1: View para Text (NÃO HERDA)
        A View tem fundo preto e cor de texto branca definida nela. 
        Porém, o texto interno fica invisível (ou usa o padrão preto) porque 
        o componente Text NÃO herda estilos de cor de uma View pai.
      */}
      <View style={styles.failedInheritanceBox}>
        <Text>
          1. View Pai com estilo {'\n'} 
          (O texto filho NÃO herda a cor automaticamente)
        </Text>
      </View>

      {/* 
        EXEMPLO 2: Text para Text (HERDA COM SUCESSO)
        O Text pai define a cor branca. O Text aninhado dentro dele 
        herda essa cor branca automaticamente e aplica apenas o seu próprio peso (negrito).
      */}
      <View style={styles.successInheritanceBox}>
        <Text style={styles.parentText}>
          2. Texto Pai (Branco) {'\n'}
          <Text style={styles.boldChildText}>
            - Este texto filho herda a cor branca e fica em Negrito!
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 24,
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  failedInheritanceBox: {
    backgroundColor: "black",
    // Se tentássemos colocar 'color: "white"' aqui, a View ignoraria.
    // O texto continuaria preto (invisível no fundo preto) se não estilizarmos o Text diretamente.
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  successInheritanceBox: {
    backgroundColor: "black",
    padding: 16,
    borderRadius: 8,
  },
  parentText: {
    color: "white", // Definido no pai
    fontSize: 14,
  },
  boldChildText: {
    fontWeight: "bold", // Herda o 'color: "white"' do Text pai e adiciona negrito
  },
});