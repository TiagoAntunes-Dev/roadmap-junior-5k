import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function DynamicUser() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Estudando Dimensions API</Text>
      </View>
    </View>
  );
}

// 1. Você captura as dimensões exatamente como estava estudando
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// 2. Aplicamos o design moderno e as condicionais direto aqui
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131A', // Fundo escuro moderno
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50, // Espaço extra para dispositivos com notch
  },
  
  card: {
    // Usamos o 'as DimensionValue' apenas para o TypeScript não reclamar da string '%'
    width: windowWidth > 500 ? '60%' : '85%',
    height: windowHeight > 600 ? '50%' : '75%',
    
    backgroundColor: '#1C1C26', // Cor do card levemente mais clara que o fundo
    borderRadius: 24, // Bordas bem arredondadas
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    
    // Sombra para dar aspecto de profundidade (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    
    // Sombra para Android
    elevation: 12,
    
    // Borda super sutil
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },

  title: {
    // Condicional de tamanho mantida com a sua lógica original
    fontSize: windowWidth > 500 ? 48 : 32,
    color: '#FFFFFF',
    fontWeight: '800', // Fonte mais gordinha
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  subtitle: {
    color: '#A0A0B0', // Cinza claro
    fontSize: 16,
    fontWeight: '500',
  }
});