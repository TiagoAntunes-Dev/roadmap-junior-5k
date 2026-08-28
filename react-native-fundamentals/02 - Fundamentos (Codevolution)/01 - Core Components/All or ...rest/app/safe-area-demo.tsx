import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function SafeAreaDemoScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SafeAreaView Demo</Text>
        <Text style={styles.description}>
          This screen is wrapped with SafeAreaView, which ensures content stays
          within safe areas (avoiding notches, status bars, and home
          indicators).
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Top inset: {insets.top}px</Text>
          <Text style={styles.infoText}>Bottom inset: {insets.bottom}px</Text>
          <Text style={styles.infoText}>Left inset: {insets.left}px</Text>
          <Text style={styles.infoText}>Right inset: {insets.right}px</Text>
        </View>
        <Text style={styles.code}>
          {`<SafeAreaView style={styles.container}>\n`}
          {`  <View>Your content</View>\n`}
          {`</SafeAreaView>`}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a7ea4",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 24,
  },
  infoBox: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginVertical: 4,
  },
  code: {
    backgroundColor: "#2d2d2d",
    color: "#f8f8f2",
    padding: 16,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "monospace",
  },
});
