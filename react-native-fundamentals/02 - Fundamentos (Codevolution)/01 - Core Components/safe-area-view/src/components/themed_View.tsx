import { Colors } from "@/constants/colors.js";
import { View, useColorScheme, type ViewProps } from "react-native";
// O hook useSafeAreaInsets é a nossa alternativa ao componente SafeAreaView padrão do React Native.
// O SafeAreaView nativo muitas vezes causa "engasgos" (choppiness) visuais nas animações 
// de transição ao navegar entre as páginas no Expo Router. 
// Este hook nos permite calcular a área segura de forma manual e muito mais fluida.
import { useSafeAreaInsets } from "react-native-safe-area-context";

// 1. Criamos uma interface customizada. 
// Ela pega tudo do ViewProps emprestado e adiciona a propriedade safe como opcional (?) e booleana.
interface ThemedViewProps extends ViewProps {
  safe?: boolean;
}

// Adicionamos a propriedade "safe", que por padrão é "false".
// O motivo de ser opcional é que não queremos que toda ThemedView do aplicativo 
// ganhe recuos extras no topo e na base. Um pequeno botão ou card no meio da tela 
// não precisa se preocupar com a área da câmera do celular. O recuo só é necessário 
// nas Views principais que englobam a tela inteira.
// 2. Trocamos o ViewProps antigo pelo nosso novo ThemedViewProps aqui:
export default function ThemedView({ style, safe = false, ...props }: ThemedViewProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  
  // SE "SAFE" FOR FALSE (O PADRÃO):
  // O componente intercepta a renderização aqui e devolve uma View perfeitamente normal.
  // Ela aplica a cor do tema e repassa os estilos. Se essa View estiver colada 
  // no topo da tela do celular, o conteúdo dela vai se sobrepor aos ícones de bateria, 
  // Wi-Fi e à câmera frontal.
  if (!safe) return (
    <View  
      style={[{backgroundColor: theme.background}, style]}
      {...props} // Despeja qualquer outra propriedade nativa da View aqui.
    />
  )

  // SE "SAFE" FOR TRUE:
  // O código ignora o 'if' acima e executa este trecho.
  // O hook analisa o modelo do celular que está rodando o app e retorna a quantidade 
  // exata de pixels que os elementos do sistema operacional (notch da câmera, barra inferior) 
  // ocupam. Esses valores são guardados dentro do objeto 'insets'.
  const insets = useSafeAreaInsets()

  return (
    <View 
      style={[{
        backgroundColor: theme.background,
        // Pegamos os valores dinâmicos do hook e os transformamos em preenchimento interno (padding).
        // Isso empurra todo o conteúdo para baixo (longe da câmera) e para cima (longe da barra de navegação).
        paddingTop: insets.top,
        paddingBottom: insets.bottom
      } 
      , style // Permite que você continue passando outros estilos personalizados.
    ]}
    {...props}
    />
  )
}