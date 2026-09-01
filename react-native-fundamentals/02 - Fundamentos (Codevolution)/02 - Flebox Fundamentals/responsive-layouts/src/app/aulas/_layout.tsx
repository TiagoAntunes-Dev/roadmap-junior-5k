import { Stack } from 'expo-router';

export default function AulasLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Lista de Aulas' }} />
      <Stack.Screen name="multipleStyles" options={{ title: 'Multiple Styles' }} />
    </Stack>
  );
}