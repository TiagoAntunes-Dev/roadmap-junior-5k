import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

// Themed Components

import ThemedView from "@/components/themed_View";
import ThemedText from "@/components/themed_text";
import Spacer from '@/components/spacer';

// -----------------------------------------------------------------------
// ROUTE GROUP — este arquivo está dentro de "app/(auth)/login.tsx"
// -----------------------------------------------------------------------
// O parênteses em "(auth)" cria um ROUTE GROUP: agrupa este arquivo e o
// register.tsx numa mesma pasta só por ORGANIZAÇÃO, mas sem adicionar
// "auth" na URL da rota. Ou seja: a rota desta página é só "/login" —
// não "/auth/login" — mesmo o arquivo estando dentro da pasta "(auth)".
export default function Login() {
  return (
    <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText title={true} style={styles.title}>
            Login to Your Account
        </ThemedText>
        
        <Spacer height={100}/>
        <Link href={'/register'}> 
            <ThemedText style={{textAlign: 'center'}}>
                Register Instead!
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