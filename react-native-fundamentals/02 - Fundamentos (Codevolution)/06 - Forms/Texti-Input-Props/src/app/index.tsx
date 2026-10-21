import { StyleSheet, StatusBar, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Digite algo aqui..." 
        placeholderTextColor="#9ca3af" // Cor suave para o texto de dica
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f5", // Fundo levemente cinza para destacar o input branco
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    justifyContent: "center", // Centraliza o input na tela para esse teste
  },

  input: {
    height: 54, // Altura maior melhora a área de toque (Touch Target)
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb", // Borda cinza bem clara e sutil
    borderRadius: 12, // Cantos mais arredondados (visual moderno)
    paddingHorizontal: 16, // Espaçamento interno lateral
    fontSize: 16,
    color: "#1f2937", // Texto escuro, mas não 100% preto (cansa menos a vista)
    
    // Sombra sutil para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    
    // Sombra sutil para Android
    elevation: 2,
  }
});
