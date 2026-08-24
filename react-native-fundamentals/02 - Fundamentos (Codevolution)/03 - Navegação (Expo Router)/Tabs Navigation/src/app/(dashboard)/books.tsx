import ThemedText from '@/components/themed_text';
import ThemedView from '@/components/themed_View';
import Spacer from '@/components/spacer'
import { StyleSheet } from 'react-native';

export default function Books() {
  return (
    <ThemedView style={styles.container}>

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
        justifyContent: "center",
        alignItems: "stretch"
    },

    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
})