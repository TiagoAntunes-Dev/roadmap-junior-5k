import "react-native-reanimated";

import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  StatusBar.setBackgroundColor("#f2f");
  StatusBar.setBarStyle("dark-content");
  StatusBar.setTranslucent(true);
  StatusBar.setHidden(false);
  StatusBar.setNetworkActivityIndicatorVisible(true);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#0a7ea4",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerBackVisible: false }}
      />
      <Stack.Screen
        name="components-demo"
        options={{ title: "Components Demo" }}
      />
      <Stack.Screen
        name="navigation-demo"
        options={{ title: "Navigation Demo" }}
      />
      <Stack.Screen
        name="safe-area-demo"
        options={{ title: "SafeAreaView Demo", headerShown: false }}
      />
    </Stack>
  );
}
