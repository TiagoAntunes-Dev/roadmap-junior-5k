import { StyleSheet } from 'react-native';
import ThemedText from '@/components/themed_text';
import ThemedView from '@/components/themed_View';
import Spacer from '@/components/spacer'

export default function Books() {
  return (
    // Na aula, percebemos que ao tirar a centralização absoluta (justifyContent: center), 
    // os elementos "subiram" e o título ficou escondido atrás das informações do celular (horário, bateria).
    // Ao passar "safe={true}" para a nossa ThemedView principal, ativamos aquele cálculo de insets 
    // do arquivo anterior. Agora, o próprio container empurra o Spacer e o Text para a área visualmente segura.
    <ThemedView style={styles.container} safe={true}>

        <Spacer />
        <ThemedText title={true} style={styles.heading}>
             Your Reading List   
        </ThemedText>

    </ThemedView>
  )
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        // Nota da aula: se você comentar a linha 'justifyContent: "center"' abaixo,
        // o conteúdo sobe para o topo. É exatamente nesse cenário de conteúdo 
        // alinhado ao topo que a propriedade safe={true} se torna obrigatória.
        justifyContent: "center",
        alignItems: "stretch"
    },

    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
})