import { Link, router, useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function NavigationDemoScreen() {
  const routerHook = useRouter();
  const [navigationHistory, setNavigationHistory] = useState<string[]>([]);

  const addToHistory = (action: string) => {
    setNavigationHistory((prev) => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${action}`,
    ]);
  };

  const navigateWithRouter = (path: string) => {
    addToHistory(`router.push("${path}")`);
    router.push(path as any);
  };

  const navigateWithRouterHook = (path: string) => {
    addToHistory(`useRouter().push("${path}")`);
    routerHook.push(path as any);
  };

  const goBack = () => {
    addToHistory("router.back()");
    router.back();
  };

  const replace = (path: string) => {
    addToHistory(`router.replace("${path}")`);
    router.replace(path as any);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Introduction */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navigation in React Native</Text>
          <Text style={styles.sectionDescription}>
            Navigation allows users to move between different screens in your
            app. In Expo Router, you can navigate using the router object or
            Link components.
          </Text>
        </View>

        {/* Router.push() */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. router.push()</Text>
          <Text style={styles.sectionDescription}>
            Pushes a new route onto the navigation stack. The user can go back
            using the back button or gesture.
          </Text>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigateWithRouter("/components-demo")}
          >
            <Text style={styles.navButtonText}>
              Navigate to Components Demo
            </Text>
          </TouchableOpacity>
          <Text style={styles.codeExample}>
            router.push(&quot;/components-demo&quot;)
          </Text>
        </View>

        {/* useRouter Hook */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. useRouter() Hook</Text>
          <Text style={styles.sectionDescription}>
            The useRouter hook provides the same navigation methods. You can use
            it in any component within the router context.
          </Text>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigateWithRouterHook("/components-demo")}
          >
            <Text style={styles.navButtonText}>
              Navigate using useRouter() Hook
            </Text>
          </TouchableOpacity>
          <Text style={styles.codeExample}>
            const router = useRouter();{`\n`}
            router.push(&quot;/components-demo&quot;)
          </Text>
        </View>

        {/* Link Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Link Component</Text>
          <Text style={styles.sectionDescription}>
            Link is a component that navigates to a route when pressed. It
            provides better accessibility and web support.
          </Text>
          <Link href="/components-demo" asChild>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => addToHistory("Link to /components-demo")}
            >
              <Text style={styles.navButtonText}>
                Navigate using Link Component
              </Text>
            </TouchableOpacity>
          </Link>
          <Text style={styles.codeExample}>
            {`<Link href="/components-demo">`}
            {`\n`} Navigate{`\n`}
            {`</Link>`}
          </Text>
        </View>

        {/* router.back() */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. router.back()</Text>
          <Text style={styles.sectionDescription}>
            Goes back to the previous screen in the navigation stack. This is
            equivalent to pressing the back button.
          </Text>
          <TouchableOpacity style={styles.navButton} onPress={goBack}>
            <Text style={styles.navButtonText}>Go Back</Text>
          </TouchableOpacity>
          <Text style={styles.codeExample}>router.back()</Text>
        </View>

        {/* router.replace() */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. router.replace()</Text>
          <Text style={styles.sectionDescription}>
            Replaces the current route with a new one. The user cannot go back
            to the previous screen using the back button.
          </Text>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => replace("/components-demo")}
          >
            <Text style={styles.navButtonText}>
              Replace with Components Demo
            </Text>
          </TouchableOpacity>
          <Text style={styles.codeExample}>
            router.replace(&quot;/components-demo&quot;)
          </Text>
        </View>

        {/* Navigation History */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navigation History</Text>
          <Text style={styles.sectionDescription}>
            Track your navigation actions below:
          </Text>
          <View style={styles.historyContainer}>
            {navigationHistory.length === 0 ? (
              <Text style={styles.noHistory}>
                No navigation actions yet. Try the buttons above!
              </Text>
            ) : (
              navigationHistory.map((item, index) => (
                <Text key={index} style={styles.historyItem}>
                  {item}
                </Text>
              ))
            )}
          </View>
          {navigationHistory.length > 0 && (
            <TouchableOpacity
              style={[styles.navButton, styles.clearButton]}
              onPress={() => setNavigationHistory([])}
            >
              <Text style={styles.navButtonText}>Clear History</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Best Practices */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Practices</Text>
          <View style={styles.bestPractices}>
            <Text style={styles.practiceItem}>
              • Use Link for declarative navigation in JSX
            </Text>
            <Text style={styles.practiceItem}>
              • Use router.push() for programmatic navigation
            </Text>
            <Text style={styles.practiceItem}>
              • Use router.replace() when you don&apos;t want back navigation
            </Text>
            <Text style={styles.practiceItem}>
              • Always provide a way to go back (back button or gesture)
            </Text>
            <Text style={styles.practiceItem}>
              • Use typed routes for better TypeScript support
            </Text>
          </View>
        </View>

        {/* Footer spacing */}
        <View style={styles.footer} />
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
    marginBottom: 32,
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0a7ea4",
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    marginBottom: 16,
  },
  navButton: {
    backgroundColor: "#0a7ea4",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  navButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  codeExample: {
    backgroundColor: "#2d2d2d",
    color: "#f8f8f2",
    padding: 12,
    borderRadius: 6,
    fontSize: 13,
    fontFamily: "monospace",
    overflow: "hidden",
  },
  historyContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    minHeight: 100,
    maxHeight: 200,
    marginBottom: 12,
  },
  noHistory: {
    color: "#999",
    fontStyle: "italic",
    textAlign: "center",
    padding: 20,
  },
  historyItem: {
    fontSize: 12,
    color: "#333",
    paddingVertical: 4,
    fontFamily: "monospace",
  },
  clearButton: {
    backgroundColor: "#dc3545",
  },
  bestPractices: {
    gap: 8,
  },
  practiceItem: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
  footer: {
    height: 32,
  },
});
