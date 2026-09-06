import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

// Define as propriedades aceitas pelo componente Box.
// PropsWithChildren permite que ele receba conteúdo entre <Box> e </Box>.
type BoxProps = PropsWithChildren<{
  // Permite personalizar o estilo padrão, por exemplo a cor de fundo.
  style?: StyleProp<ViewStyle>;
}>;

export default function Box({ children, style }: BoxProps) {
  return (
    // O Box foi criado para evitar repetir a mesma estrutura de View e Text
    // em cada exemplo das aulas de Flexbox.
    <View style={[styles.box, style]}>
      // Exibe o conteúdo recebido dentro da caixa.
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos compartilhados por todas as caixas: tamanho fixo e conteúdo centralizado.
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  // Garante que o texto fique legível sobre as cores de fundo das caixas.
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
