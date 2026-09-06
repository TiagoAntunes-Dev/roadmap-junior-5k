import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, DimensionValue } from 'react-native';

export default function UseWinDimensions() {
  // ==========================================
  // O QUE É O useWindowDimensions? (O Gancho Mágico)
  // ==========================================
  // Diferente do Dimensions.get('window') que lê o tamanho da tela apenas uma vez 
  // quando o app abre, o useWindowDimensions é um HOOK do React.
  // 
  // 1. Reatividade ao Vivo: Ele fica "escutando" a tela. Se o usuário rotacionar 
  // o celular (de retrato para paisagem) ou redimensionar a janela (em tablets/foldables), 
  // o hook captura a nova largura e altura instantaneamente.
  // 
  // 2. Re-renderização Automática: Assim que a largura ou altura mudam, o React 
  // atualiza as variáveis 'width' e 'height', recalcula os estilos e desenha 
  // o componente novamente na tela sem precisar reiniciar o app (sem apertar 'R').
  // ==========================================
  const { width, height } = useWindowDimensions();

  // Calculamos os estilos dinamicamente baseados nos valores mutáveis do hook
  const dynamicStyles = {
    cardWidth: (width > 500 ? '55%' : '90%') as DimensionValue,
    cardHeight: (height > 600 ? '45%' : '80%') as DimensionValue,
    titleSize: width > 500 ? 42 : 28,
  };

  return (
    // Container principal com um fundo escuro esverdeado futurista
    <View style={styles.container}>
      
      {/* 
        Injetamos os estilos dinâmicos diretamente no array de estilos do View.
        Como o 'width' e 'height' vêm do useWindowDimensions, o componente se adapta 
        em tempo real se a orientação mudar.
      */}
      <View style={[
        styles.card, 
        { width: dynamicStyles.cardWidth, height: dynamicStyles.cardHeight }
      ]}>
        
        {/* Badge superior com estilo moderno de pílula */}
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>✨ USE WINDOW DIMENSIONS</Text>
        </View>

        {/* Título com tamanho fluido e responsivo */}
        <Text style={[styles.title, { fontSize: dynamicStyles.titleSize }]}>
          Live Resize!
        </Text>
        
        {/* Subtítulo explicativo */}
        <Text style={styles.subtitle}>
          Rotacione a tela para ver a mágica acontecer.
        </Text>
        
      </View>
    </View>
  );
}

// Estilos estáticos que não mudam de tamanho (mantidos separados por performance)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064E3B', // Fundo verde escuro profundo (Tom Esmeralda)
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  card: {
    backgroundColor: '#065F46', // Tom de verde intermediário para o card
    borderRadius: 32, // Bordas bem arredondadas estilo app moderno
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    
    // Sombras profundas para dar destaque sobre o fundo escuro (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    
    // Elevação para Android
    elevation: 16,
    
    // Borda clara translúcida simulando efeito de vidro (Glassmorphism sutil)
    borderWidth: 1.5,
    borderColor: 'rgba(52, 211, 153, 0.3)',
  },

  badgeContainer: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.4)',
  },

  badgeText: {
    color: '#34D399',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },

  title: {
    color: '#F0FDF4', // Branco esverdeado bem claro
    fontWeight: '900', // Ajustado de '950' para '900' para satisfazer o TypeScript
    letterSpacing: 1,
    marginBottom: 8,
    textAlign: 'center',
  },
  
  subtitle: {
    color: '#A7F3D0', // Verde claro pastel para legibilidade suave
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
  }
});