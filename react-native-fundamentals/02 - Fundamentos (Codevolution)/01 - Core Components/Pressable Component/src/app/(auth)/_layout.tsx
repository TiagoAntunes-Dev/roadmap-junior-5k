import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'


export default function AuthLayout() {
  return (
    <>
        <StatusBar style="auto"/>
        <Stack
            screenOptions={{animation: "none"}}
        />
    </>
  )
}

const styles = StyleSheet.create({

})