import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>


      <Link href="/" style={styles.link}>Back Home Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
});