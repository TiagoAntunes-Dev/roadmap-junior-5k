import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

// Themed Components

import ThemedView from "@/components/themed_View";
import ThemedText from "@/components/themed_text";
import Spacer from '@/components/spacer';

// -----------------------------------------------------------------------
// ROUTE GROUP — este arquivo está dentro de "app/(auth)/register.tsx"
// -----------------------------------------------------------------------
// Mesma lógica do login.tsx: por estar dentro da pasta "(auth)" (com
// parênteses), a rota desta página vira só "/register" — o nome da
// pasta "auth" não entra na URL, ele serve só pra agrupar login e
// register num mesmo lugar dentro do projeto.
export default function Register() {
  return (
    <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText title={true} style={styles.title}>
            Make an Account! Click Here...
        </ThemedText>
        
        <Spacer height={100}/>
        <Link href={'/register'}> 
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
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 30
    }
})