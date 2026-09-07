import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/*
        "name" precisa bater com o nome do arquivo (sem extensão) —
        nesse caso, "index" (app/index.tsx). O "title" é o texto que
        aparece na barra de cima do app.
      */}
      <Stack.Screen name="index" options={{ title: "Yu-Gi-Oh!" }} />
    </Stack>
  );
}
