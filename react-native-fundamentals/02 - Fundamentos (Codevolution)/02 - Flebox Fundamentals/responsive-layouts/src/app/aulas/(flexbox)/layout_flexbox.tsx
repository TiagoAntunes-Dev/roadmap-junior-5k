import { StyleSheet, Text, View } from 'react-native';

export default function LayoutFlexbox() {
  return (
    /* 
      1. FLEX CONTAINER (O Pai):
      O componente <View> principal atua como o Container Flex. 
      No React Native, todos os componentes são flex containers por padrão (com display: flex implícito).
    */
    <View style={styles.flexContainer}>
      <Text style={styles.mainTitle}>Conceito de Flexbox & Eixos</Text>

      {/* 2. FLEX ITEMS (Os Filhos diretos): */}
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.boxText}>Item 1</Text>
      </View>

      <View style={[styles.box, styles.box2]}>
        <Text style={styles.boxText}>Item 2</Text>
      </View>

      <View style={[styles.box, styles.box3]}>
        <Text style={styles.boxText}>Item 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    padding: 24,
    
    /* 
      --- DIFERENÇAS CRUCIAIS DOS EIXOS (WEB vs REACT NATIVE) ---
      
      No CSS Web (padrão):
      - O Main Axis (Eixo Principal) corre na horizontal (da esquerda para a direita).
      - O Cross Axis (Eixo Cruzado) corre na vertical (de cima para baixo).

      No React Native (Invertido por padrão!):
      - O Main Axis corre na VERTICAL (de cima para baixo / column).
      - O Cross Axis corre na HORIZONTAL (da esquerda para a direita).
      
      Por conta disso, por padrão no React Native:
      - 'justifyContent' alinha os itens na VERTICAL (subindo/descendo).
      - 'alignItems' alinha os itens na HORIZONTAL (movendo para a esquerda/direita).
    */
    flexDirection: "column", // Comportamento padrão no React Native
    justifyContent: "center", // Alinha ao longo do Eixo Principal (Vertical)
    alignItems: "center",      // Alinha ao longo do Eixo Cruzado (Horizontal)
  },

  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },

  box: {
    width: 200,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4, // Sombra para destacar os itens no Android
  },

  box1: {
    backgroundColor: "#FF6B6B",
  },

  box2: {
    backgroundColor: "#48DBFB",
  },

  box3: {
    backgroundColor: "#1DD1A1",
  },

  boxText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
});