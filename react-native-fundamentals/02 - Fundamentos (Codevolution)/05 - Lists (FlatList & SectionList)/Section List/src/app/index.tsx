import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, SectionList } from "react-native";
import pokemonList from "@/db/data.json";
import groupedPokemonList from "@/db/grouped-data.json";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        {/* <FlatList 
          data={pokemonList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => String(item.id)}

         
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}

         
          ListHeaderComponent={
            <View style={styles.headerWrapper}>
              <Text style={styles.headerText}>Lista de Pokémon</Text>
            </View>
          }

          
          ListFooterComponent={
            // Só exibe o rodapé se houver itens na lista
            pokemonList.length > 0 ? (
              <View style={styles.footerWrapper}>
                <Text style={styles.footerText}>Fim da Lista</Text>
              </View>
            ) : null
          }

          
          ListEmptyComponent={
            <View style={styles.emptyWrapper}>
              <Text style={styles.emptyText}>Nenhum Pokémon encontrado.</Text>
            </View>
          }

         
          contentContainerStyle={
            pokemonList.length === 0 && styles.emptyListContent
          }
        /> */}
        <SectionList 
        sections={groupedPokemonList}
        renderItem={({ item }) =>{
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          )
        }}
        renderSectionHeader={({ section }) => (
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>{section.type}</Text>
          </View>
        )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight
  },
  listContainer: {
    flex: 1, // Garante que a View externa ocupe toda a área disponível da tela
    paddingHorizontal: 20,
  },

  scrollView: {
    paddingHorizontal: 20,
  },

  // ESTILO DE CENTRALIZAÇÃO PARA LISTA VAZIA
  emptyListContent: {
    flexGrow: 1, // Estica a "lona" do ScrollView para ocupar toda a tela disponível
    justifyContent: "center", // Centraliza o conteúdo na vertical
    alignItems: "center",     // Centraliza o conteúdo na horizontal
  },

  emptyWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
    fontWeight: "500",
    textAlign: "center",
  },

  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
  },

  headerWrapper: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },

  footerWrapper: {
    paddingVertical: 20,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  }
});