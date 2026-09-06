import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="aulas" options={{ title: 'Índice de Aulas' }} />
    </Stack>
  );
}