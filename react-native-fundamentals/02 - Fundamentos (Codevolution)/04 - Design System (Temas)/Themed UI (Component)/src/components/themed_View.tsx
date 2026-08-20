import { View, useColorScheme } from "react-native";
import { Colors } from '@/constants/colors.js'

// -----------------------------------------------------------------------
// THEMED VIEW — a ideia central da aula: encapsular a lógica de tema
// -----------------------------------------------------------------------
// Em vez de repetir "useColorScheme + Colors[colorScheme] ?? Colors.light"
// em TODA página/layout que precisa de um fundo temático, o professor cria
// esse componente UMA vez, e daí em diante qualquer tela usa <ThemedView>
// no lugar de <View> normal — a lógica de tema fica escondida aqui dentro.
export default function ThemedView({style, ...props}) {
  // "style" é retirado (destructured) separadamente dos outros props,
  // porque ele vai ser tratado de um jeito especial aqui embaixo (mesclado
  // com o estilo de fundo do tema). "...props" junta TODO o resto (ex:
  // onPress, children, etc) pra sermos repassados adiante pro <View> real.
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    // CORRIGIDO: antes estava "}, style]{...props}}>" — faltava fechar
    // a chave do "style={...}" ANTES de abrir o "{...props}", e faltava
    // um espaço separando os dois. Em JSX, cada prop precisa estar bem
    // delimitada: style={[...]} de um lado, {...props} do outro. É essa
    // parte que corresponde ao trecho do vídeo onde ele explica
    // "...spread syntax para repassar props extras pro View nativo".
    <View
      style={[{
        backgroundColor: theme.background
      }, style]}
      {...props}
    >

    </View>
  );
}

// No vídeo, o professor também comenta que, como a tag <View> aqui é
// self-closing (sem conteúdo escrito manualmente entre ela e um
// </View> separado), o React automaticamente renderiza o "children"
// (qualquer conteúdo aninhado passado ao usar <ThemedView>...</ThemedView>
// em outra tela) sem precisar destructurar "children" manualmente do
// objeto de props.