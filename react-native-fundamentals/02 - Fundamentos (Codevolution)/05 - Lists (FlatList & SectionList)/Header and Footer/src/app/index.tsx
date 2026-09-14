import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList } from "react-native";
import pokemonList from "@/db/data.json";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 
        Container externo para aplicar preenchimento horizontal na tela.
        Dica de Ouro: O paddingHorizontal aqui não afeta a rolagem interna do FlatList.
      */}
      <View style={styles.listContainer}>
        <FlatList 
          data={pokemonList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => String(item.id)}

          /* 
            ------------------------------------------------------------------------------
            1. PROP: 'ItemSeparatorComponent'
            ------------------------------------------------------------------------------
            - Renderiza um componente divisor ENTRE os itens do array.
            - VANTAGEM: Não adiciona espaçamento antes do primeiro item nem depois do último,
              evitando margens indesejadas no topo e no fim da lista.
          */
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}

          /* 
            ------------------------------------------------------------------------------
            2. PROP: 'ListHeaderComponent'
            ------------------------------------------------------------------------------
            - Renderiza um componente no TOPO da lista (acima do primeiro item renderizado).
            - COMPORTAMENTO DE SCROLL: Ele rola JUNTO com a lista. Ao rolar para baixo,
              o cabeçalho sobe e esconde.
            - POR QUE USAR? Nunca aninhe um FlatList dentro de um ScrollView comum para colocar
              um título no topo! Isso destrói a virtualização e lança o aviso:
              "VirtualizedLists should never be nested inside plain ScrollViews".
              Use SEMPRE o ListHeaderComponent para títulos, barras de busca ou banners superiores.
            - Aceita: Elemento JSX, Componente React ou Função retornando JSX.
          */
          ListHeaderComponent={
            <View style={styles.headerWrapper}>
              <Text style={styles.headerText}>Lista de Pokémon</Text>
            </View>
          }

          /* 
            ------------------------------------------------------------------------------
            3. PROP: 'ListFooterComponent'
            ------------------------------------------------------------------------------
            - Renderiza um componente no RODAPÉ da lista (abaixo do último item).
            - COMPORTAMENTO DE SCROLL: Só fica visível quando o usuário rola até o final.
            - CASOS DE USO TÍPICOS:
                • Indicadores de carregamento (ActivityIndicator / Spinners) em paginação.
                • Mensagens de finalização ("Você chegou ao fim da lista").
                • Botões de ação do tipo "Carregar mais".
          */
          ListFooterComponent={
            // Só exibe o rodapé se houver itens na lista
            pokemonList.length > 0 ? (
              <View style={styles.footerWrapper}>
                <Text style={styles.footerText}>Fim da Lista</Text>
              </View>
            ) : null
          }

          /* 
            ------------------------------------------------------------------------------
            4. PROP: 'ListEmptyComponent'
            ------------------------------------------------------------------------------
            - Renderizado AUTOMATICAMENTE quando o array informado na prop 'data' estiver
              VAZIO (length === 0), null ou undefined.
            - Se a lista contiver pelo menos 1 item, esta prop é totalmente ignorada.
            - NOTA SOBRE CENTRALIZAÇÃO: Sozinha, esta prop renderiza o texto no TOPO da tela.
              Para centralizar verticalmente no meio da tela, ela depende da prop
              'contentContainerStyle' configurada abaixo.
          */
          ListEmptyComponent={
            <View style={styles.emptyWrapper}>
              <Text style={styles.emptyText}>Nenhum Pokémon encontrado.</Text>
            </View>
          }

          /* 
            ------------------------------------------------------------------------------
            5. PROP CRUCIAL: 'contentContainerStyle' (Solução para Centralizar o EmptyState)
            ------------------------------------------------------------------------------
            - Aplica estilos ao CONTAINER INTERNO de rolagem que envolve TODOS os elementos
              (Header + Items + Footer + EmptyComponent).
            - DIFERENÇA DE 'style': 
                • 'style': Estiliza a janela externa do FlatList (o Viewport fixo na tela).
                • 'contentContainerStyle': Estiliza a "lona" interna rolável.
            - POR QUE 'flexGrow: 1' É O SEGREDO?
                O ScrollView/FlatList por padrão encolhe a lona interna para o tamanho exato
                do seu conteúdo. Se a lista estiver vazia, a lona tem altura de pouquíssimos pixels,
                fazendo o 'justifyContent: center' alinhar o texto no centro de uma caixa pequena no topo!
                Com 'flexGrow: 1', forçamos a lona interna a esticar e preencher 100% da altura da
                janela visível quando vazia, permitindo que 'justifyContent: center' empurre o texto
                para o CENTRO ABSOLUTO da tela.
          */
          contentContainerStyle={
            pokemonList.length === 0 && styles.emptyListContent
          }
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