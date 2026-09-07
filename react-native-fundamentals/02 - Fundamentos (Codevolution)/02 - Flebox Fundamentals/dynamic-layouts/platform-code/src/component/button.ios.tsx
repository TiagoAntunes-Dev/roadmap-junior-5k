import { Pressable, StyleSheet, Text } from "react-native";

// -----------------------------------------------------------------------
// Button.ios.tsx — usado SÓ quando o app builda pro iOS
// -----------------------------------------------------------------------
// No iOS, botões costumam ter cantos bem arredondados e um visual mais
// "flat" (sem sombra pesada), seguindo as convenções do design da Apple
// (Human Interface Guidelines).
interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#007AFF", // azul característico do iOS
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20, // cantos bem arredondados, estilo iOS
  },
  pressed: {
    opacity: 0.6, // no iOS, o feedback de toque costuma ser via opacidade
  },
  text: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});