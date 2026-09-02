import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function AulasIndex() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Índice de Aulas</Text>
      
      <Link href="/aulas/multipleStyles" style={styles.card}>
        <Text style={styles.text}>Multiple Styles</Text>
      </Link>

      <Link href="/aulas/boxModel" style={styles.card}>
        <Text style={styles.text}>Box Model</Text>
      </Link>

       <Link href="/aulas/shadow_and_elevation" style={styles.card}>
        <Text style={styles.text}>Shadow and Elevation</Text>
      </Link>

      <Link href="/aulas/style_inheritance" style={styles.card}>
        <Text style={styles.text}>Style Inheritance</Text>
      </Link>

      <Link href="/aulas/layout_flexbox" style={styles.card}>
        <Text style={styles.text}>Layout Flexbox</Text>
      </Link>

      <Link href="/aulas/codeSetup" style={styles.card}>
        <Text style={styles.text}>Code Setup</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 24, 
    alignItems: 'center' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  card: { 
    padding: 16, 
    backgroundColor: '#f0f0f0', 
    marginVertical: 6, 
    width: '100%', 
    borderRadius: 8 
  },
  text: { 
    fontSize: 18, 
    color: '#007AFF' 
  },
});