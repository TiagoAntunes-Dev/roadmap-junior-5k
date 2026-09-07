import { Pressable, StyleSheet, Text } from "react-native";

// -----------------------------------------------------------------------
// Button.tsx — o FALLBACK genérico
// -----------------------------------------------------------------------
// Esse arquivo (SEM extensão de plataforma) só é usado se o Metro NÃO
// encontrar uma versão específica pra plataforma atual. Como criamos
// Button.ios.tsx, Button.android.tsx e Button.web.tsx, esse aqui na
// prática nunca vai ser escolhido nesse projeto — mas ele é importante
// como uma "rede de segurança": se um dia você tirar o Button.web.tsx,
// por exemplo, rodar na web vai cair automaticamente pra este arquivo
// aqui, em vez de dar erro de "componente não encontrado".
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
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});