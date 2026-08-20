import { View, useColorScheme, StyleSheet } from "react-native";
import { Colors } from '@/constants/colors.js'

// -----------------------------------------------------------------------
// THEMED CARD — mesmo padrão do ThemedView, só que com aparência de "card"
// -----------------------------------------------------------------------
// O professor descreve esse componente como quase idêntico ao ThemedView
// (mesma lógica de tema), mas com um estilo extra de "cartão": cantos
// arredondados (borderRadius) e um respiro interno (padding).
export default function ThemedCard({style, ...props}) {
  // Mesma lógica de sempre: pega o tema do sistema (light/dark) e busca
  // a paleta de cores correspondente, com fallback pro tema claro.
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style={[{
      // Repare: aqui a cor de fundo vem de "theme.uiBackground", e NÃO
      // de "theme.background" (que é o que o ThemedView usa). O
      // professor comenta isso no vídeo — o Colors.js tem uma cor
      // separada só pra elementos de UI "flutuando" sobre o fundo
      // (como cards), diferente da cor do fundo geral da tela.
      backgroundColor: theme.uiBackground
    // CORRIGIDO: estava "style.card" — mas "style" aqui é a prop que a
    // pessoa passa de fora ao usar <ThemedCard style={...}>, ela não
    // tem uma propriedade ".card". Quem tem o "card" é o "styles"
    // (com S) definido pelo StyleSheet.create lá embaixo, no fim deste
    // arquivo — é ele que guarda o borderRadius/padding do cartão.
    }, styles.card, style]}
    {...props}>    
    </View>
  );
}

// O estilo "card" (borderRadius + padding) fica separado num
// StyleSheet.create normal, igual qualquer outro estilo — a única
// diferença do ThemedView é que aqui tem ESSE estilo extra sendo
// aplicado no array de estilos, além da cor de fundo dinâmica do tema.
const styles = StyleSheet.create ({
    card: {
        borderRadius: 5,
        padding: 20
    }
})