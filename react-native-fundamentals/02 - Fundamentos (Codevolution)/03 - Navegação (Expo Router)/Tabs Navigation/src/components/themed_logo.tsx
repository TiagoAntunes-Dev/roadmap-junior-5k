import { Image, StyleSheet, useColorScheme } from "react-native";

// Imagens
// -----------------------------------------------------------------------
// THEMED LOGO — troca a imagem inteira dependendo do tema
// -----------------------------------------------------------------------
// Diferente do ThemedView/ThemedText (que só trocam CORES), aqui o
// professor mostra um caso onde é o próprio ARQUIVO de imagem que muda:
// existem dois logos prontos (um pra fundo claro, outro pra fundo
// escuro), e trocamos qual deles é usado de acordo com o tema atual.
import DarkLogo from "@/pictures/logo_dark.png";
import LightLogo from "@/pictures/logo_light.png";

export default function ThemedLogo() {
  const colorScheme = useColorScheme();

  // Aqui, em vez do padrão "Colors[colorScheme] ?? Colors.light" que
  // vimos nos outros componentes, é usado um operador TERNÁRIO simples:
  // "condição ? valorSeVerdadeiro : valorSeFalso".
  //
  // Se colorScheme for exatamente "dark", usamos o DarkLogo. Em
  // qualquer outro caso (incluindo "light" OU null/undefined), caímos
  // no LightLogo — que já funciona como fallback aqui, sem precisar de
  // um "??" separado.
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} style={styles.logo} />;
}

// OBS: no vídeo, o professor também menciona espalhar (...props) nesse
// componente pra poder passar estilos extras de fora (como fez no
// ThemedView/ThemedCard) — aqui essa parte não está implementada, então
// não dá pra passar um "style" prop de fora pra esse ThemedLogo.

// CORRIGIDO: estava faltando este StyleSheet — o componente usava
// "styles.logo" lá em cima, mas "styles" nunca tinha sido definido
// neste arquivo, o que geraria erro de "styles is not defined" ao
// rodar. Adicionei um tamanho padrão pro logo (você pode ajustar
// width/height como preferir).
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
  },
});
