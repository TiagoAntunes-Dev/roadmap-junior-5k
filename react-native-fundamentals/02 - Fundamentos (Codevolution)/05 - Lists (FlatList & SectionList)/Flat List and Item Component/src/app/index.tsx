import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList } from "react-native";
import pokemonList from "@/db/data.json";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        {/* 
          ================================================================================
          FLATLIST: COMPONENTE OTIMIZADO PARA RENDERIZAÇÃO DE LISTAS
          ================================================================================
          Diferente do ScrollView + .map() (que renderiza TODOS os itens na memória de
          uma vez só, travando o app com listas grandes), o FlatList utiliza VIRTUALIZAÇÃO:
          ele renderiza apenas os itens atualmente visíveis na tela + um pequeno buffer.
          Conforme você rola, os itens que saem da tela são desmontados para economizar memória.
        */}
        <FlatList 
          /* 
            ------------------------------------------------------------------------------
            1. PROP OBRIGATÓRIA: 'data'
            ------------------------------------------------------------------------------
            - É a fonte de dados primária. Recebe um Array de dados (objetos, strings, etc).
            - O FlatList lê este array para determinar quantos itens existem na lista e 
              passar os dados individuais de cada elemento para o 'renderItem'.
          */
          data={pokemonList}

          /* 
            ------------------------------------------------------------------------------
            2. PROP OBRIGATÓRIA: 'renderItem'
            ------------------------------------------------------------------------------
            - Função callback responsável por retornar o JSX de CADA linha/card da lista.
            - O React Native injeta automaticamente um objeto contendo propriedades úteis:
                • { item }: O objeto atual do seu array (ex: { id: "1", name: "Bulbasaur", type: "Grass" })
                • { index }: A posição numérica do item no array (0, 1, 2...)
            - BOA PRÁTICA: Usamos a desestruturação '({ item })' para capturar diretamente
              o elemento que queremos renderizar.
          */
          renderItem={({ item }) => {
            return (
              /* 
                NOTA DE DESEMPENHO SOBRE A 'key':
                No ScrollView com .map(), você precisa colocar 'key={pokemon.id}' nesta View.
                No FlatList, NÃO É NECESSÁRIO colocar 'key' na View interna, pois o próprio
                FlatList gerencia a chave dos componentes filhos através da prop 'keyExtractor'.
              */
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}

          /* 
            ------------------------------------------------------------------------------
            3. PROP RECOMENDADA: 'keyExtractor'
            ------------------------------------------------------------------------------
            - Função que extrai uma chave ÚNICA para cada item da lista (deve retornar String).
            - Permite que o React rastreie quais itens mudaram, foram adicionados ou removidos.
            - ALGORITMO DE FALLBACK PADRÃO DO FLATLIST (se você OMITIR esta prop):
                1º Procura por uma propriedade chamada 'item.key' (se for string).
                2º Se não achar, procura por 'item.id' (se for string).
                3º Se não achar, usa o 'index' numérico do array (ex: "0", "1", "2"...).
            - BOA PRÁTICA: Declare sempre o keyExtractor explicitamente e garanta a conversão 
              para String (ex: String(item.id)) para evitar alertas do compilador.
          */
          keyExtractor={(item, index) => String(item.id)}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ListEmptyComponent={<Text style={{ textAlign: "center", marginTop: 20 }}>Nenhum Pokémon encontrado.</Text>}

          /* 
            ------------------------------------------------------------------------------
            4. PROP OPCIONAL: 'horizontal'
            ------------------------------------------------------------------------------
            - Boolean (default: false). Se definido como 'horizontal={true}' ou apenas 'horizontal',
              muda a direção de rolagem da lista de vertical para horizontal.
          */
          // horizontal={true}
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
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
  }
});