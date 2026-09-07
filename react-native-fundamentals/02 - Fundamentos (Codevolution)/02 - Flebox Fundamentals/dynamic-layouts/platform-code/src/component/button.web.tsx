import { Pressable, StyleSheet, Text } from "react-native";

// -----------------------------------------------------------------------
// Button.web.tsx — usado SÓ quando o app builda pra Web
// -----------------------------------------------------------------------
// Na web, dá pra usar coisas que não existem em mobile, como o cursor
// virando "pointer" ao passar o mouse por cima (algo que não faz
// sentido no celular, já que não tem mouse).
interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable
      style={styles.btn}
      onPress={onPress}
      // @ts-ignore -> "cursor" só existe no React Native Web, o TS do
      // React Native puro não conhece essa propriedade
      // eslint-disable-next-line
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#2f95dc",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
    // @ts-ignore -> propriedades CSS-only que só fazem sentido na web
    cursor: "pointer",
    userSelect: "none",
  },
  text: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});