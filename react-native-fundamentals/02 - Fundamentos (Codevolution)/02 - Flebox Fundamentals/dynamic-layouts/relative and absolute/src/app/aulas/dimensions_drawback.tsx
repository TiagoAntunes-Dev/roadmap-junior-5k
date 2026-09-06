import React from 'react';
import { StyleSheet, Text, View, Dimensions, DimensionValue } from 'react-native';

export default function DynamicDrawback() {
  return (
    // Container principal que centraliza o card na tela
    <View style={styles.container}>
      <View style={styles.card}>
        
        {/* Badge superior para estilização e contexto */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>API DIMENSIONS</Text>
        </View>

        {/* Título principal responsivo */}
        <Text style={styles.title}>Welcome!</Text>
        
        {/* Subtítulo descritivo */}
        <Text style={styles.subtitle}>Estudando Dimensions API</Text>

      </View>
    </View>
  );
}

// ==========================================
// CAPTURA ESTÁTICA DAS DIMENSÕES (Conceito da Aula)
// O Dimensions.get lê o tamanho da tela UMA ÚNICA VEZ quando o app inicia.
// Como visto na transcrição, se o usuário rotacionar o celular, 
// esses valores NÃO se atualizam sozinhos a menos que o app seja reiniciado.
// ==========================================
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Log para acompanhar no console as dimensões capturadas inicialmente
console.log({ windowWidth, windowHeight });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B', // Fundo escuro premium (Dark Mode)
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40, // Compensa o alinhamento visual centralizado
  },
  
  card: {
    // Aplicando a largura de forma condicional baseada na largura estática capturada
    width: (windowWidth > 500 ? '60%' : '88%') as DimensionValue,
    
    // Aplicando a altura condicional baseada na altura estática capturada
    height: (windowHeight > 600 ? '48%' : '70%') as DimensionValue,
    
    backgroundColor: '#18181B', // Tom de cinza escuro moderno para o card
    borderRadius: 28, // Bordas bem arredondadas
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    
    // Efeitos de sombra avançados para iOS
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    
    // Efeito de sombra (elevação) para Android
    elevation: 16,
    
    // Borda sutil iluminada para dar profundidade ao card
    borderWidth: 1.5,
    borderColor: 'rgba(99, 102, 241, 0.2)',
  },

  badge: {
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.3)',
  },

  badgeText: {
    color: '#818CF8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },

  title: {
    // Tamanho da fonte condicional: se a largura for maior que 500px, usa 48, senão 30.
    fontSize: windowWidth > 500 ? 44 : 30,
    color: '#FAFAFA',
    fontWeight: '900',
    letterSpacing: 0.5,
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    color: '#A1A1AA', // Tom de cinza intermediário para hierarquia visual
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  }
});