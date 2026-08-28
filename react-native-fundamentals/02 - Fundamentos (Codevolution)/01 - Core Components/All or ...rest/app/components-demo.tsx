import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Sample data for FlatList
const sampleData = [
  { id: "1", title: "Item 1", description: "First item in the list" },
  { id: "2", title: "Item 2", description: "Second item in the list" },
  { id: "3", title: "Item 3", description: "Third item in the list" },
  { id: "4", title: "Item 4", description: "Fourth item in the list" },
  { id: "5", title: "Item 5", description: "Fifth item in the list" },
  { id: "6", title: "Item 1", description: "First item in the list" },
  { id: "7", title: "Item 2", description: "Second item in the list" },
  { id: "8", title: "Item 3", description: "Third item in the list" },
  { id: "9", title: "Item 4", description: "Fourth item in the list" },
  { id: "10", title: "Item 5", description: "Fifth item in the list" },
];

export default function ComponentsDemoScreen() {
  const [inputText, setInputText] = useState("");
  const [touchCount, setTouchCount] = useState(0);
  const [buttonPressCount, setButtonPressCount] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const renderListItem = ({ item }: { item: (typeof sampleData)[0] }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{item.title}</Text>
      <Text style={styles.listItemDescription}>{item.description}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={110}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        {/* View Component */}
        <View style={[styles.section]}>
          <Text style={styles.sectionTitle}>1. View Component</Text>
          <Text style={styles.sectionDescription}>
            View is the most fundamental component for building UI. It&apos;s a
            container that supports layout with flexbox, style, touch handling,
            and accessibility controls.
          </Text>
          <View style={styles.viewExample}>
            <Text style={styles.exampleText}>
              This is content inside a View component
            </Text>
          </View>
        </View>

        {/* Text Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Text Component</Text>
          <Text
            style={styles.sectionDescription}
            onPress={() => Alert.alert("Touch handling")}
          >
            Text is used to display text. It supports nesting, styling, and
            touch handling. All text in React Native must be inside a Text
            component.
          </Text>
          <View style={styles.textExample}>
            <Text style={styles.regularText}>Regular text</Text>
            <Text style={styles.boldText}>Bold text</Text>
            <Text style={styles.coloredText}>Colored text</Text>
            <Text style={styles.largeText}>Large text</Text>
          </View>
        </View>

        {/* TouchableOpacity Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. TouchableOpacity Component</Text>
          <Text style={styles.sectionDescription}>
            TouchableOpacity is a wrapper that makes views respond properly to
            touches. On press down, the opacity of the wrapped view is
            decreased. Pressed {touchCount} time(s).
          </Text>
          <TouchableOpacity
            style={styles.touchableButton}
            onPress={() => {
              //   Alert.alert("The button was pressed");
              setTouchCount(touchCount + 1);
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.touchableButtonText}>
              Press me! (Count: {touchCount})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Button Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Button Component</Text>
          <Text style={styles.sectionDescription}>
            Button is a basic button component that should render nicely on any
            platform. Supports a minimal level of customization. Pressed{" "}
            {buttonPressCount} time(s).
          </Text>
          <Button
            title="Press Button"
            onPress={() => setButtonPressCount(buttonPressCount + 1)}
            color="#0a7ea4"
          />
        </View>

        {/* Image Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Image Component</Text>
          <Text style={styles.sectionDescription}>
            Image is used to display images. It supports local images (require)
            and remote images (URI).
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/react-logo.png")}
              //   source={{
              //     uri: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
              //   }}
              style={styles.imageExample}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* TextInput Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. TextInput Component</Text>
          <Text style={styles.sectionDescription}>
            TextInput is a basic component that allows the user to enter text.
            It has an onChangeText prop that takes a function and is called each
            time the text changed.
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type something here..."
            value={inputText}
            onChangeText={setInputText}
            placeholderTextColor="#999"
          />
          {inputText ? (
            <Text style={styles.inputDisplay}>
              You typed: &quot;{inputText}&quot;
            </Text>
          ) : null}
        </View>

        {/* KeyboardAvoidingView Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            7. KeyboardAvoidingView Component
          </Text>
          <Text style={styles.sectionDescription}>
            KeyboardAvoidingView automatically adjusts its height, position, or
            bottom padding based on the keyboard height to remain visible while
            the virtual keyboard is displayed. This entire screen is wrapped in
            a KeyboardAvoidingView!
          </Text>
          <View style={styles.kavExample}>
            <Text style={styles.exampleText}>
              Try focusing the TextInput above to see the keyboard behavior
            </Text>
          </View>
        </View>

        {/* ScrollView Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. ScrollView Component</Text>
          <Text style={styles.sectionDescription}>
            ScrollView is a generic scrolling container that can contain
            multiple components and views. This entire content is inside a
            ScrollView, allowing you to scroll through all the examples!
          </Text>
          <View style={styles.scrollViewExample}>
            <Text style={styles.exampleText}>
              This content is scrollable. Try scrolling up and down!
            </Text>
          </View>
        </View>

        {/* FlatList Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>9. FlatList Component</Text>
          <Text style={styles.sectionDescription}>
            FlatList is a performant interface for rendering simple, flat lists,
            supporting the most handy features: pull-to-refresh, header/footer
            components, separator components, and more. It&apos;s optimized for
            long lists of data.
          </Text>
          <View style={styles.flatListContainer}>
            <FlatList
              data={sampleData}
              renderItem={renderListItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={true}
              nestedScrollEnabled={true}
              style={styles.flatList}
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                Alert.alert("Refreshing");
                setTimeout(() => {
                  setRefreshing(false);
                }, 2000);
              }}
            />
          </View>
        </View>

        {/* Footer spacing */}
        <View style={styles.footer} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    backgroundColor: "#0a7ea4",
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    minHeight: 60,
  },
  backButton: {
    padding: 8,
    marginRight: 12,
    zIndex: 1,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
  viewExample: {
    backgroundColor: "#e3f2fd",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#90caf9",
  },
  textExample: {
    gap: 8,
  },
  regularText: {
    fontSize: 16,
    color: "#333",
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  coloredText: {
    fontSize: 16,
    color: "#0a7ea4",
  },
  largeText: {
    fontSize: 24,
    color: "#333",
  },
  touchableButton: {
    backgroundColor: "#0a7ea4",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
  },
  imageExample: {
    width: 150,
    height: 150,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "white",
    marginTop: 8,
  },
  inputDisplay: {
    marginTop: 8,
    fontSize: 14,
    color: "#0a7ea4",
    fontStyle: "italic",
  },
  kavExample: {
    backgroundColor: "#fff3e0",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffb74d",
  },
  scrollViewExample: {
    backgroundColor: "#e8f5e9",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#81c784",
  },
  flatListContainer: {
    maxHeight: 300,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  flatList: {
    flexGrow: 0,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  listItemDescription: {
    fontSize: 14,
    color: "#666",
  },
  exampleText: {
    fontSize: 14,
    color: "#333",
  },
  footer: {
    height: 32,
  },
});
