import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import { View, Text } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

function heightPoints() {
  let components = [];
  for (let i = 0; i <= SCREEN_HEIGHT; i = i + 50) {
    const color = i === 0 ? "transparent" : "black";
    components.push(
      <View key={i} style={{ position: "absolute", top: i }}>
        <View style={{ width: 10, height: 1, backgroundColor: color }} />
        <Text style={{ fontSize: 12, color, marginLeft: 10 }}>{i}</Text>
      </View>
    );
  }
  return components;
}
function widthPoints() {
  let components = [];
  for (let i = 0; i <= SCREEN_HEIGHT; i = i + 50) {
    const color = i === 0 ? "transparent" : "black";
    components.push(
      <View key={i} style={{ position: "absolute", left: i }}>
        <View style={{ width: 1, height: 10, backgroundColor: color }} />
        <Text style={{ fontSize: 12, color }}>{i}</Text>
      </View>
    );
  }
  return components;
}

export function Background({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          paddingTop: 10,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            position: "absolute",
            width: 10,
            backgroundColor: "red",
            height: SCREEN_HEIGHT,
          }}
        />
        <View
          style={{
            position: "absolute",
            width: SCREEN_WIDTH,
            backgroundColor: "blue",
            height: 10,
          }}
        />
        <View>
          {heightPoints().map((component) => component)}
          {widthPoints().map((component) => component)}
        </View>

        {children}
      </View>
    </SafeAreaView>
  );
}
