import { Tabs } from "expo-router"
import { Colors } from "@/constants/colors";
import { useColorScheme } from "react-native";

export default function DashboardLayout() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"];
  return (
    <Tabs 
        screenOptions={{headerShown: false, tabBarStyle: {
            backgroundColor: theme.background,
            paddingTop: 10,
            height: 90
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor
    }}
    >
        <Tabs.Screen
            name= "books"
            options={{ title: 'Books' }}
        />

        <Tabs.Screen
            name= "create"
            options={{ title: 'Create' }}
        />

        <Tabs.Screen
            name= "profile"
            options={{ title: 'Profile' }}
        />

    </Tabs>
  )
}