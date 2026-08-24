import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Colors } from '@/constants/colors';

// Themed Components

import ThemedView from "@/components/themed_View";
import ThemedText from "@/components/themed_text";
import Spacer from '@/components/spacer';
import ThemedButton from '@/components/themed_button';


export default function Login() {
  const handleSubmit = () => {
    console.log("Login Form Submitted!");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "white" }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />
      
      <Link href={"/register"}>
        <ThemedText style={{ textAlign: "center" }}>
          Register Instead!
        </ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 30,
    marginBottom: 20, // Uma margem inferior extra aqui costuma ajudar no respiro antes do botão!
  },
});