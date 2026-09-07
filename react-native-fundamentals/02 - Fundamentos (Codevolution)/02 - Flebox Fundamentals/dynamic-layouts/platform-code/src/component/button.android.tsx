import { Pressable, StyleSheet, Text } from "react-native";

// -----------------------------------------------------------------------
// Button.android.tsx — usado SÓ quando o app builda pro Android
// -----------------------------------------------------------------------
// No Android, o padrão de design (Material Design) costuma usar cantos
// menos arredondados, MAIÚSCULAS no texto e "elevation" (sombra) em vez
// de mudar a opacidade no toque — geralmente usando "android_ripple"
// pra aquele efeito de "ondulação" característico do Material Design.
interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable
      style={styles.btn}
      onPress={onPress}
      android_ripple={{ color: "#ffffff55" }} // efeito de ondulação, só existe no Android
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#6200EE", // roxo característico do Material Design
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4, // cantos bem menos arredondados que no iOS
    elevation: 4, // sombra "nativa" do Android (não existe no iOS)
  },
  text: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase", // texto em maiúsculas, convenção do Material Design
  },
});