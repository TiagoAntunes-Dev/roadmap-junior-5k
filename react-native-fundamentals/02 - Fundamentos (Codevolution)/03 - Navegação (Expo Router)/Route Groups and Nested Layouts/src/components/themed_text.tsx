import { Text, TextProps, useColorScheme } from "react-native";
import { Colors } from "@/constants/colors.js";

// -----------------------------------------------------------------------
// THEMED TEXT — texto que já vem com a cor certa do tema, e com 2 "tons"
// -----------------------------------------------------------------------
// "extends TextProps" faz esse componente aceitar QUALQUER prop que um
// <Text> nativo do React Native aceitaria (numberOfLines, onPress, etc),
// além da prop customizada "title" que adicionamos abaixo.
interface ThemedTextProps extends TextProps {
  title?: boolean;
}

export default function ThemedText({
  style,
  // O professor explica que a paleta de cores (Colors.js) tem DUAS cores
  // de texto: uma pra título ("title", mais forte/contrastante) e outra
  // pro texto normal ("text"). Essa prop "title" (com valor padrão
  // "false") é o jeito de escolher qual das duas usar: passando
  // title={true} no componente, ele vira um "texto de título".
  title = false,
  ...props
}: ThemedTextProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"] ?? Colors.light;

  // Operador ternário: se "title" for true, usamos theme.title (cor de
  // título); senão, usamos theme.text (cor de texto normal). Essa é a
  // parte que decide o "tom" do texto.
  const textColor = title ? theme.title : theme.text;

  return (
    <Text
      // Mesmo padrão de array de estilos usado no ThemedView/ThemedCard:
      // primeiro aplicamos a cor calculada pelo tema, depois qualquer
      // "style" extra que for passado de fora ao usar <ThemedText style={...}>.
      style={[{ color: textColor }, style]}
      {...props}
    />
  );
}