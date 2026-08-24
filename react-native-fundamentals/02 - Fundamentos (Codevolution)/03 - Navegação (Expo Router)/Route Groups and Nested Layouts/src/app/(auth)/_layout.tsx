import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

// -----------------------------------------------------------------------
// NESTED LAYOUT — layout aninhado, só pra dentro do grupo (auth)
// -----------------------------------------------------------------------
// Este arquivo é um "_layout.tsx" DENTRO da pasta "(auth)", então ele só
// afeta as páginas que estão dentro dessa pasta (login e register) —
// diferente do _layout.tsx da raiz, que afeta o app inteiro.
export default function AuthLayout() {
  return (
    <>
        <StatusBar style="auto"/>
        {/*
          Repare que aqui não temos <Stack.Screen> individuais pra login
          e register. Diferente do layout raiz (onde cada tela às vezes
          precisa de opções próprias, tipo um "title" diferente), aqui a
          gente só quer aplicar as MESMAS opções pras duas páginas do
          grupo de uma vez — por isso basta configurar "screenOptions"
          direto no <Stack>, sem registrar cada tela separadamente.
        */}
        <Stack
            screenOptions={{animation: "none"}}
        />
    </>
  )
}

const styles = StyleSheet.create({

})