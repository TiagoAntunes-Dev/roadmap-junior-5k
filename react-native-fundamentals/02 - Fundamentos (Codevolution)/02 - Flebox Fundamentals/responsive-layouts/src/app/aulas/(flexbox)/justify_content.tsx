import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "justifyContent" — só ela, nada mais
// =============================================================================
// "justifyContent" alinha os filhos ao longo do EIXO PRINCIPAL do
// container (o mesmo eixo que "flexDirection" define). Ou seja:
// - Em flexDirection: "column" (padrão) -> alinha na VERTICAL.
// - Em flexDirection: "row" -> alinha na HORIZONTAL.
//
// Pra ficar mais fácil de visualizar, todos os exemplos abaixo usam
// flexDirection: "row", já que é mais intuitivo ver o espaçamento
// horizontal.
export default function JustifyContent() {
  return (
    <ScrollView>
      <Secao titulo='"flex-start" (padrão) — cola no início'>
        <Exemplo1_FlexStart />
      </Secao>
      <Secao titulo='"flex-end" — cola no final'>
        <Exemplo2_FlexEnd />
      </Secao>
      <Secao titulo='"center" — centraliza tudo'>
        <Exemplo3_Center />
      </Secao>
      <Secao titulo='"space-between" — espaço só ENTRE os itens'>
        <Exemplo4_SpaceBetween />
      </Secao>
      <Secao titulo='"space-around" — espaço ao redor de cada item'>
        <Exemplo5_SpaceAround />
      </Secao>
      <Secao titulo='"space-evenly" — espaços idênticos entre todos'>
        <Exemplo6_SpaceEvenly />
      </Secao>
    </ScrollView>
  );
}

const caixa = { width: 50, height: 50 };

// flex-start é o valor PADRÃO — os itens ficam colados no começo do
// eixo principal (esquerda, numa row), sem espaço extra entre eles.
export function Exemplo1_FlexStart() {
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start" }}>
      <View style={{ ...caixa, backgroundColor: "tomato" }} />
      <View style={{ ...caixa, backgroundColor: "gold" }} />
      <View style={{ ...caixa, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Empurra todos os itens pro FINAL do eixo principal (direita, numa row).
export function Exemplo2_FlexEnd() {
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
      <View style={{ ...caixa, backgroundColor: "tomato" }} />
      <View style={{ ...caixa, backgroundColor: "gold" }} />
      <View style={{ ...caixa, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Centraliza o BLOCO INTEIRO de itens no meio do eixo principal.
export function Exemplo3_Center() {
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
      <View style={{ ...caixa, backgroundColor: "tomato" }} />
      <View style={{ ...caixa, backgroundColor: "gold" }} />
      <View style={{ ...caixa, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Distribui o espaço EXTRA só entre os itens — o primeiro cola no
// início, o último cola no final, e o espaço sobra igualmente dividido
// só nos "buracos" entre eles (sem espaço nas pontas).
export function Exemplo4_SpaceBetween() {
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ ...caixa, backgroundColor: "tomato" }} />
      <View style={{ ...caixa, backgroundColor: "gold" }} />
      <View style={{ ...caixa, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Dá um espaço IGUAL ao redor de cada item — só que o espaço das
// pontas (antes do primeiro, depois do último) fica com METADE do
// espaço que existe entre os itens do meio.
export function Exemplo5_SpaceAround() {
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
      <View style={{ ...caixa, backgroundColor: "tomato" }} />
      <View style={{ ...caixa, backgroundColor: "gold" }} />
      <View style={{ ...caixa, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Distribui TODOS os espaços de forma idêntica — inclusive as pontas.
// Diferente do space-around, aqui o espaço antes do primeiro item e
// depois do último é do MESMO tamanho que os espaços do meio.
export function Exemplo6_SpaceEvenly() {
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}>
      <View style={{ ...caixa, backgroundColor: "tomato" }} />
      <View style={{ ...caixa, backgroundColor: "gold" }} />
      <View style={{ ...caixa, backgroundColor: "lightgreen" }} />
    </View>
  );
}

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontWeight: "bold", padding: 8, backgroundColor: "#eee" }}>
        {titulo}
      </Text>
      <View style={{ height: 100, backgroundColor: "#fafafa" }}>{children}</View>
    </View>
  );
}

/**
 * =============================================================================
 *  RESUMO RÁPIDO — só sobre "justifyContent"
 * =============================================================================
 *  - Alinha os filhos no EIXO PRINCIPAL (o mesmo que flexDirection define).
 *  - flex-start (padrão) / flex-end / center -> colam num ponto, sem
 *    distribuir espaço extra.
 *  - space-between / space-around / space-evenly -> distribuem o
 *    espaço SOBRANDO entre os itens, cada um de um jeito diferente nas
 *    pontas.
 * =============================================================================
 */