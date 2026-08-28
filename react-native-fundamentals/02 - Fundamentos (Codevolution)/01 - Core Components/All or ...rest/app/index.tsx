import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome!</Text>
          <Text style={styles.sectionDescription}>
            This tutorial app demonstrates React Native components and
            navigation patterns. Choose a topic below to get started.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/components-demo")}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🧩</Text>
            <Text style={styles.cardTitle}>Components Demo</Text>
          </View>
          <Text style={styles.cardDescription}>
            Explore React Native components: View, Text, TouchableOpacity,
            Button, Image, TextInput, KeyboardAvoidingView, ScrollView, and
            FlatList with interactive examples.
          </Text>
          <Text style={styles.cardAction}>Tap to explore →</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/navigation-demo")}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🧭</Text>
            <Text style={styles.cardTitle}>Navigation Demo</Text>
          </View>
          <Text style={styles.cardDescription}>
            Learn how to navigate between screens using router.push(),
            useRouter(), Link components, and more navigation patterns in Expo
            Router.
          </Text>
          <Text style={styles.cardAction}>Tap to explore →</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/safe-area-demo")}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>📱</Text>
            <Text style={styles.cardTitle}>SafeAreaView Demo</Text>
          </View>
          <Text style={styles.cardDescription}>
            Learn how to use SafeAreaView and useSafeAreaInsets to ensure your
            content is visible and properly positioned on all devices, including
            those with notches and home indicators.
          </Text>
          <Text style={styles.cardAction}>Tap to explore →</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Use the navigation buttons above to see navigation in action!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a7ea4",
    marginBottom: 12,
  },
  sectionDescription: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#0a7ea4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0a7ea4",
  },
  cardDescription: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
    marginBottom: 12,
  },
  cardAction: {
    fontSize: 14,
    color: "#0a7ea4",
    fontWeight: "600",
    textAlign: "right",
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    fontStyle: "italic",
  },
});
