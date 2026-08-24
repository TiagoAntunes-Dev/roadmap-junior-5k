import { Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

// Themed Components

import ThemedView from "@/components/themed_View";
import ThemedText from "@/components/themed_text";
import ThemedButton from '@/components/themed_button';
import Spacer from '@/components/spacer';

export default function Register() {

    const handleSubmit = () => {
    console.log("Register Form Submitted and User Created with Sucess!");
  };
  return (
    <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText title={true} style={styles.title}>
            Make an Account! Click Here...
        </ThemedText>

        <ThemedButton onPress={handleSubmit}>
            <Text style={{ color: "white" }}>Register</Text>
        </ThemedButton>
        
        <Spacer height={100}/>
        <Link href={'/login'}> 
            <ThemedText style={{textAlign: 'center'}}>
                 Already has an Account? Login it's the Right Way!
            </ThemedText>
        </Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 30
    }
})