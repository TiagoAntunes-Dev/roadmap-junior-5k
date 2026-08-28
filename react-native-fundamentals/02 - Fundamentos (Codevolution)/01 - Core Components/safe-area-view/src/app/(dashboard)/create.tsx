import ThemedText from '@/components/themed_text';
import ThemedView from '@/components/themed_View';
import Spacer from '@/components/spacer'
import { View, Text, StyleSheet } from 'react-native';

export default function Create() {
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
            Add a New Book
        </ThemedText>

        <Spacer />
    </ThemedView>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
})