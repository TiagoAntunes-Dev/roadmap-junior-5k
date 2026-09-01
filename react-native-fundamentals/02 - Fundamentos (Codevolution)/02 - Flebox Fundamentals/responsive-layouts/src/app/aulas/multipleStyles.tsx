import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function MultipleStyles() {
  return (
    <View style={styles.container}>
        <View style={[styles.lightblueBg, styles.box]}>
            <Text>Lightblue Box</Text>
        </View>
        <View style={[styles.lightgreenBg, styles.box]}>
            <Text>Lightgreen Box</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "plum",
    padding: 60,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },

  box: {
    width: 100,
    height: 100,
    padding: 10,

  },

  lightblueBg:{
    backgroundColor: "lightblue",
    marginBottom: 10,
  },

  lightgreenBg:{
    backgroundColor: "lightgreen",
  }
});