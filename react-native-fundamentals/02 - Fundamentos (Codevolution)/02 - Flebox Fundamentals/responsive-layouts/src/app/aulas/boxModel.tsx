import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function BoxModel() {
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
    width: "25%",
    height: "25%",
   // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple"

  },

  lightblueBg:{
    backgroundColor: "lightblue",
    marginBottom: 10,
  },

  lightgreenBg:{
    backgroundColor: "lightgreen",
  }
});