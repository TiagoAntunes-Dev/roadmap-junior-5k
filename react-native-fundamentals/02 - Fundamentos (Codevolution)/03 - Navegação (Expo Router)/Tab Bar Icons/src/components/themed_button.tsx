import { Pressable, StyleSheet, PressableProps, StyleProp, ViewStyle } from "react-native";
import { Colors } from "@/constants/colors";

// 1. Criamos a "regra" das propriedades do botão
// Ele herda tudo do Pressable (onPress, onLongPress, etc)
interface ThemedButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>; // Tipamos o estilo especificamente para não dar erro no array
}

// 2. Avisamos ao TypeScript que esse componente usa a regra que criamos acima
export default function ThemedButton({ style, ...rest }: ThemedButtonProps) {
  return (
    <Pressable 
      // O Pressable tem esse superpoder de receber uma função no style.
      // O "pressed" é um booleano que fica true quando o dedo está na tela.
      style={({ pressed }) => [
        styles.btn, 
        pressed && styles.pressed, 
        style
      ]} 
      {...rest} 
    />
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary, // Certifique-se de que "primary" existe no seu arquivo Colors!
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});