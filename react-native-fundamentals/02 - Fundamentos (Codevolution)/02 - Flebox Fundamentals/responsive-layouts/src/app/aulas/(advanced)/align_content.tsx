import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "alignContent" — só ela, nada mais
// =============================================================================
// "alignContent" só faz efeito quando existe MAIS DE UMA LINHA de itens
// (ou seja, precisa de flexWrap: "wrap" + itens suficientes pra
// quebrar linha) E ainda sobra espaço extra no eixo cruzado. Ele
// controla como as LINHAS INTEIRAS (não os itens individuais) se
// distribuem nesse espaço sobrando.
//
// É fácil confundir com "alignItems": alignItems alinha os ITENS
// dentro de CADA linha; alignContent alinha as LINHAS entre si.
//
// Valores: "flex-start", "flex-end", "center", "stretch" (padrão),
// "space-between", "space-around", "space-evenly".
export default function AlignContent() {
  return (
    <ScrollView>
      <Secao titulo='"stretch" (padrão) — linhas esticam pra preencher'>
        <Exemplo1_Stretch />
      </Secao>
      <Secao titulo='"flex-start" — linhas coladas no topo'>
        <Exemplo2_FlexStart />
      </Secao>
      <Secao titulo='"center" — linhas centralizadas'>
        <Exemplo3_Center />
      </Secao>
      <Secao titulo='"space-between" — espaço só entre as linhas'>
        <Exemplo4_SpaceBetween />
      </Secao>
    </ScrollView>
  );
}

// Container mais alto (300px) que o necessário pras 2 linhas de itens
// (cada linha tem uns 60px), então SOBRA espaço vertical. Com
// "stretch" (padrão), as linhas se ESTICAM pra ocupar todo esse espaço
// extra igualmente.
export function Exemplo1_Stretch() {
  return (
    <View style={{ height: 300, flexDirection: "row", flexWrap: "wrap", alignContent: "stretch" }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View key={n} style={{ width: 100, backgroundColor: n % 2 ? "tomato" : "gold" }}>
          <Text>{n}</Text>
        </View>
      ))}
    </View>
  );
}

// As duas linhas ficam coladas no TOPO do container, deixando todo o
// espaço extra sobrando embaixo, de uma vez só (não distribuído).
export function Exemplo2_FlexStart() {
  return (
    <View style={{ height: 300, flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View key={n} style={{ width: 100, height: 60, backgroundColor: n % 2 ? "tomato" : "gold" }}>
          <Text>{n}</Text>
        </View>
      ))}
    </View>
  );
}

// As linhas ficam agrupadas e centralizadas no MEIO do container,
// sobrando espaço igual em cima e embaixo do bloco de linhas.
export function Exemplo3_Center() {
  return (
    <View style={{ height: 300, flexDirection: "row", flexWrap: "wrap", alignContent: "center" }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View key={n} style={{ width: 100, height: 60, backgroundColor: n % 2 ? "tomato" : "gold" }}>
          <Text>{n}</Text>
        </View>
      ))}
    </View>
  );
}

// O espaço extra é distribuído SÓ entre as linhas — a primeira linha
// cola no topo, a última cola embaixo, e o espaço sobra no meio.
export function Exemplo4_SpaceBetween() {
  return (
    <View style={{ height: 300, flexDirection: "row", flexWrap: "wrap", alignContent: "space-between" }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View key={n} style={{ width: 100, height: 60, backgroundColor: n % 2 ? "tomato" : "gold" }}>
          <Text>{n}</Text>
        </View>
      ))}
    </View>
  );
}

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontWeight: "bold", padding: 8, backgroundColor: "#eee" }}>
        {titulo}
      </Text>
      <View style={{ backgroundColor: "#fafafa" }}>{children}</View>
    </View>
  );
}

/**
 * =============================================================================
 *  RESUMO RÁPIDO — só sobre "alignContent"
 * =============================================================================
 *  - Só tem efeito com VÁRIAS LINHAS (flexWrap: "wrap") e espaço extra
 *    sobrando no eixo cruzado.
 *  - Alinha as LINHAS entre si — diferente de alignItems, que alinha
 *    os itens DENTRO de cada linha.
 *  - "stretch" (padrão) estica as linhas pra preencher o espaço.
 *  - flex-start / flex-end / center / space-between / space-around /
 *    space-evenly funcionam igual ao justifyContent, só que aplicado
 *    às linhas inteiras, não aos itens.
 * =============================================================================
 */