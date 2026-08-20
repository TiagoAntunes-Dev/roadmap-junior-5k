import { StyleSheet, Text, View } from "react-native";
import { Colors } from '@/constants/colors.js';
import { Link } from "expo-router";
// ERRO: mesma coisa do layout — "useColorScheme" era usado embaixo sem
// import. Sem essa linha, o app quebraria nesta tela.
import { useColorScheme } from 'react-native';

export default function About() {
  // Mesmo padrão do _layout.tsx: pega o tema do sistema ("light" ou
  // "dark") e busca a paleta de cores correspondente dentro de Colors,
  // com fallback pro tema claro caso colorScheme venha vazio.
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    // -----------------------------------------------------------------
    // APLICANDO O TEMA NO ESTILO — style como ARRAY
    // -----------------------------------------------------------------
    // Repare que "style" aqui recebe um ARRAY: [styles.container, {...}]
    // em vez de um objeto único. O React Native aceita isso e MESCLA os
    // estilos na ordem em que aparecem — o segundo objeto (com
    // backgroundColor dinâmico do tema) tem prioridade sobre o
    // primeiro caso haja alguma propriedade repetida.
    //
    // Isso é o padrão usado pra combinar um estilo "fixo" (definido no
    // StyleSheet, reaproveitável) com um estilo "dinâmico" (que muda
    // em tempo de execução, como a cor de fundo do tema atual).
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/*
        CORREÇÃO: o <Text> do título não tinha cor definida. No tema
        escuro, theme.background fica quase preto (#121212) e o texto
        preto padrão do RN ficaria praticamente INVISÍVEL em cima dele.
        Por isso adicionei { color: theme.title } aqui, puxando a cor
        de título certa do tema atual (preto no light, branco no dark).
      */}
      <Text style={[styles.title, { color: theme.title }]}>About Page</Text>


      {/*
        Mesma lógica aplicada nos links: sem cor definida, o texto do
        Link também ficaria com a cor padrão (geralmente escura),
        sumindo no fundo escuro. Usei theme.text, que é a cor de texto
        "normal" (não-título) de cada paleta.
      */}
      <Link href="/" style={[styles.link, { color: theme.text }]}>Back Home Page</Link>
      <Link href="/contact" style={[styles.link, { color: theme.text }]}>Contact Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    // Repare que NÃO colocamos "color" fixo aqui — a cor do título
    // agora é sempre decidida em tempo de execução pelo tema (acima),
    // então o StyleSheet só guarda o que é igual nos dois temas
    // (peso e tamanho da fonte).
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    // Mesmo raciocínio: a cor do link vem do tema, não fica fixa aqui.
  }
});