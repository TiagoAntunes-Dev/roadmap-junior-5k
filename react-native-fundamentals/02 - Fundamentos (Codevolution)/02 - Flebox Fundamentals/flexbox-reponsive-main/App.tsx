import React from "react";
import { StyleSheet, View } from "react-native";
import { Background } from "./Background";

function YellowBox() {
  return <View style={[styles.box, { backgroundColor: "yellow" }]} />;
}

function BlueBox() {
  return (
    <View style={[styles.box, { backgroundColor: "blue", flexShrink: 1 }]} />
  );
}

function GreenBox() {
  return (
    <View style={[styles.box, { backgroundColor: "green", flexShrink: 1 }]} />
  );
}

function RedBox() {
  return <View style={[styles.box, { backgroundColor: "red" }]} />;
}

export default function App() {
  return (
    <Background>
      <View style={styles.container}>
        <YellowBox />
        <BlueBox />
        <GreenBox />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CCC",
    opacity: 0.5,
    // flex: 0,
  },
  box: {
    width: 100,
    height: 100,
    opacity: 0.6,
  },
});
