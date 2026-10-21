import { StyleSheet, StatusBar, TextInput, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Index() {
  // ✅ correto e recomendado
  const [name, setName] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="email@example.com"
      autoCorrect={false}
      autoCapitalize="none"
      // secureTextEntry
      // keyboardType="" 
      />
      <Text style={styles.text}>
        My name is {name}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },

  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },

  text: {
    fontSize: 30,
    padding: 10
  }
});
