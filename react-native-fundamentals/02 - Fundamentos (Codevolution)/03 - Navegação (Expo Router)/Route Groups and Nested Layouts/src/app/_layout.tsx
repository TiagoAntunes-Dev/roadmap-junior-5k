import { Colors } from "@/constants/colors.js";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />

        {/*
          ROUTE GROUP como uma "tela" do Stack — este Stack.Screen não é
          uma página de verdade, é o GRUPO "(auth)" inteiro (a pasta com
          login.tsx e register.tsx dentro). Como essa pasta fica direto
          dentro de "app/", o Stack raiz enxerga ela como se fosse uma
          tela e precisa que a gente a registre aqui — "name" tem que
          bater com o nome da pasta, incluindo os parênteses: "(auth)".

          headerShown: false aqui esconde o header pra TODO o grupo de
          uma vez (login e register), removendo até aquele texto "auth"
          que apareceria sozinho no topo se a gente não fizesse isso —
          mesmo a URL não tendo "/auth" na frente.
        */}
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}