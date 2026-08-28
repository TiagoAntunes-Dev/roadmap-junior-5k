import ThemedText from '@/components/themed_text';
import ThemedView from '@/components/themed_View';
import Spacer from '@/components/spacer'
import { StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
            Your Email
        </ThemedText>

        <Spacer />

        <ThemedText>Time to start reading some books ...</ThemedText>
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