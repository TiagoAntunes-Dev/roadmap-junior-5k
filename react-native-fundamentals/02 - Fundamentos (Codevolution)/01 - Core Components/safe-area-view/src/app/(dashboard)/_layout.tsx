import { Tabs } from "expo-router"
import { Colors } from "@/constants/colors";
import { useColorScheme } from "react-native";
// Importamos o componente Ionicons do pacote @expo/vector-icons, que precisa ser instalado previamente.
import { Ionicons } from '@expo/vector-icons'

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
            options={{ 
                title: 'Books', 
                // Adicionamos a propriedade tabBarIcon, que recebe uma função que retorna o componente do ícone.
                // Desestruturamos a propriedade "focused" (que retorna true ou false) como argumento da função para avaliar dinamicamente se a aba está ativa.
                tabBarIcon: ({ focused }) => (
                <Ionicons
                    // Definimos o tamanho do ícone como 24 pixels.
                    size={24}
                    // O "name" decide qual ícone será usado.
                    // Usamos um operador ternário: se "focused" for true, usamos o ícone preenchido ('book'); se for false, usamos a versão de contorno ('book-outline').
                    name={focused ? 'book' : 'book-outline'}
                    // A cor também usa um ternário puxando os dados do nosso tema: cor de foco quando true, e cor padrão quando false.
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />
            ) }}
        />

        <Tabs.Screen
            name= "create"
            options={{ 
                title: 'Create', 
                tabBarIcon: ({ focused }) => (
                <Ionicons
                    size={24}
                    // Para a aba de criação, usamos os ícones 'create' quando em foco e 'create-outline' quando fora de foco.
                    name={focused ? 'create' : 'create-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />
            ) }}
        />

        <Tabs.Screen
            name= "profile"
            options={{ 
                title: 'Profile', 
                tabBarIcon: ({ focused }) => (
                <Ionicons
                    size={24}
                    // Para a aba de perfil, usamos o ícone 'person' quando a aba está ativa, e 'person-outline' quando não está.
                    name={focused ? 'person' : 'person-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />
            ) }}
        />

    </Tabs>
  )
}