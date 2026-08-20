import { Stack } from 'expo-router';
import { Colors } from '@/constants/colors.js';
// ERRO: "useColorScheme" estava sendo usado lá embaixo mas nunca tinha
// sido importado — isso ia quebrar o app com "useColorScheme is not
// defined". Ele vem do próprio "react-native".
import { useColorScheme } from 'react-native';
// Também removi os imports de StyleSheet, Text, View e Image: nenhum
// deles era usado neste arquivo (o único elemento retornado é o
// <Stack>) — imports não usados não quebram o app, mas é uma boa
// prática limpar pra não confundir na hora de estudar o código depois.

export default function RootLayout() {
  // -----------------------------------------------------------------
  // LIGHT E DARK THEME — como funciona
  // -----------------------------------------------------------------
  // useColorScheme() é um HOOK do próprio React Native que retorna o
  // tema atual do SISTEMA OPERACIONAL do usuário: a string "light" ou
  // "dark" (ou "null"/"undefined" em alguns casos, tipo web sem
  // preferência definida).
  //
  // Ou seja: se a pessoa mudar o celular dela pro modo escuro nas
  // configurações do sistema, esse hook automaticamente retorna "dark"
  // — e o app pode reagir a essa mudança em tempo real.
  const colorScheme = useColorScheme();

  // "Colors" é o objeto que definimos em constants/colors.js, com duas
  // "paletas" nomeadas: Colors.light e Colors.dark.
  //
  // Aqui usamos colorScheme (que vale "light" ou "dark") pra acessar
  // dinamicamente a paleta certa dentro do objeto Colors — isso se
  // chama "computed property access": Colors[colorScheme] é o mesmo
  // que escrever Colors.light OU Colors.dark, dependendo do valor da
  // variável.
  //
  // O "?? Colors.light" no final é o operador de coalescência nula:
  // funciona como um FALLBACK (valor de segurança). Se colorScheme for
  // null/undefined (ex: o sistema não informou nenhuma preferência),
  // em vez do app quebrar tentando acessar Colors[undefined], ele cai
  // para o tema claro por padrão.
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          // Em vez de um hex fixo (como era antes, "#ddd"), agora a
          // cor de fundo do header vem do tema ATUAL — muda sozinha
          // se o usuário alternar entre claro/escuro.
          backgroundColor: theme.navBackground,
        },
        // O mesmo vale pro texto/ícones do header: usamos theme.title
        // em vez de um hex fixo.
        headerTintColor: theme.title,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact' }} />
    </Stack>
  );
}