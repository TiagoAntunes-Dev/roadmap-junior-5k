import { Stack } from "expo-router"
import { Colors } from "@/constants/colors.js"
import { useColorScheme } from "react-native"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    // Precisa do Fragment (<>...</>) aqui porque agora temos DOIS
    // elementos "irmãos" sendo retornados ao mesmo tempo (StatusBar e
    // Stack), e um componente só pode retornar UMA raiz — o Fragment
    // resolve isso sem precisar criar uma <View> extra desnecessária.
    <>
      {/*
        <StatusBar> controla a aparência da barra de status do celular
        (hora, bateria, sinal). Isso não foi tema principal desta aula
        de temas, mas já estava presente no boilerplate — vale notar
        que ela também poderia reagir ao tema (ex: ícones claros no
        fundo escuro), embora aqui esteja fixa com value="auto".
      */}
      <StatusBar value="auto" />
      <Stack screenOptions={{
        // Mesma lógica das aulas anteriores: aplica a cor de fundo e a
        // cor do texto do header GLOBALMENTE, pra todas as telas do
        // Stack, usando os valores já calculados a partir do tema atual.
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}>
        {/* Individual Screens */}
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        {/*
          headerShown: false esconde o header SÓ nesta tela (contact),
          mesmo com o screenOptions global definindo o header pras
          outras. Isso mostra que opções individuais em Stack.Screen
          sempre podem sobrescrever o que foi definido globalmente.
        */}
        <Stack.Screen name="contact" options={{ title: "Contact", headerShown: false }} />
      </Stack>
    </>
  )
}