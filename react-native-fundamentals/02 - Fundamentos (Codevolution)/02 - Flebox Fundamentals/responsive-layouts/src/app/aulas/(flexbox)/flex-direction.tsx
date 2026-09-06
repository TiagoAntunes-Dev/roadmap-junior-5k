import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "flexDirection" — só ela, nada mais
// =============================================================================
// "flexDirection" define o EIXO PRINCIPAL de um container — ou seja, em
// qual direção os elementos filhos são empilhados uns em relação aos
// outros.
//
// ATENÇÃO — essa é a maior "pegadinha" pra quem vem da web: no CSS da
// web, o padrão de flexDirection é "row" (linha/horizontal). No React
// Native, o padrão é "column" (coluna/vertical)! É por isso que toda
// <View> que a gente fez até agora empilha os filhos de cima pra baixo
// sem precisar escrever nada — column já é o comportamento padrão.
//
// Valores possíveis: "column" (padrão), "row", "column-reverse", "row-reverse".
export default function FlexDirection() {
  return (
    <ScrollView>
      <Secao titulo='Exemplo 1 — "column" (padrão, nem precisa escrever)'>
        <Exemplo1_Column />
      </Secao>

      <Secao titulo='Exemplo 2 — "row" (lado a lado, horizontal)'>
        <Exemplo2_Row />
      </Secao>

      <Secao titulo='Exemplo 3 — "row-reverse" (ordem invertida)'>
        <Exemplo3_RowReverse />
      </Secao>

      <Secao titulo='Exemplo 4 — "column-reverse" (ordem invertida)'>
        <Exemplo4_ColumnReverse />
      </Secao>

      <Secao titulo="Exemplo 5 — flexDirection muda o que “flex” mede">
        <Exemplo5_FlexDirectionAfetaFlex />
      </Secao>
    </ScrollView>
  );
}

// -----------------------------------------------------------------------
// EXEMPLO 1 — flexDirection: "column" (o padrão)
// -----------------------------------------------------------------------
// Os filhos são empilhados de CIMA PRA BAIXO, na ordem em que aparecem
// no código. Isso já acontece mesmo sem escrever "flexDirection" — está
// aqui só pra deixar explícito o que já é o comportamento padrão.
export function Exemplo1_Column() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ height: 40, backgroundColor: "tomato" }}>
        <Text>1</Text>
      </View>
      <View style={{ height: 40, backgroundColor: "gold" }}>
        <Text>2</Text>
      </View>
      <View style={{ height: 40, backgroundColor: "lightgreen" }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

// -----------------------------------------------------------------------
// EXEMPLO 2 — flexDirection: "row"
// -----------------------------------------------------------------------
// Muda o eixo principal pra HORIZONTAL: os filhos ficam lado a lado,
// da esquerda pra direita, na ordem em que aparecem no código. É o
// valor mais usado quando você quer, por exemplo, ícone + texto na
// mesma linha, ou uma barra de botões lado a lado.
export function Exemplo2_Row() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ width: 60, backgroundColor: "tomato" }}>
        <Text>1</Text>
      </View>
      <View style={{ width: 60, backgroundColor: "gold" }}>
        <Text>2</Text>
      </View>
      <View style={{ width: 60, backgroundColor: "lightgreen" }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

// -----------------------------------------------------------------------
// EXEMPLO 3 — flexDirection: "row-reverse"
// -----------------------------------------------------------------------
// Igual "row" (horizontal), mas a ORDEM visual é invertida: o primeiro
// elemento do código aparece na DIREITA, não na esquerda. Repare que a
// ordem no código continua 1, 2, 3 — só a exibição que muda.
export function Exemplo3_RowReverse() {
  return (
    <View style={{ flex: 1, flexDirection: "row-reverse" }}>
      <View style={{ width: 60, backgroundColor: "tomato" }}>
        <Text>1</Text>
      </View>
      <View style={{ width: 60, backgroundColor: "gold" }}>
        <Text>2</Text>
      </View>
      <View style={{ width: 60, backgroundColor: "lightgreen" }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

// -----------------------------------------------------------------------
// EXEMPLO 4 — flexDirection: "column-reverse"
// -----------------------------------------------------------------------
// Mesma ideia do row-reverse, só que no eixo vertical: o primeiro
// elemento do código aparece EMBAIXO, não em cima.
export function Exemplo4_ColumnReverse() {
  return (
    <View style={{ flex: 1, flexDirection: "column-reverse" }}>
      <View style={{ height: 40, backgroundColor: "tomato" }}>
        <Text>1</Text>
      </View>
      <View style={{ height: 40, backgroundColor: "gold" }}>
        <Text>2</Text>
      </View>
      <View style={{ height: 40, backgroundColor: "lightgreen" }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

// -----------------------------------------------------------------------
// EXEMPLO 5 — flexDirection muda o que a propriedade "flex" mede
// -----------------------------------------------------------------------
// Lembra que no arquivo sobre "flex" a gente disse que ele controla a
// ALTURA por padrão? Isso só é verdade porque o padrão de flexDirection
// é "column". Se você mudar pra "row", o "flex" passa a controlar a
// LARGURA, não mais a altura — porque agora o eixo principal é o
// horizontal. Aqui os três têm flex: 1 dentro de um container "row",
// então dividem a LARGURA igualmente entre si (não a altura).
export function Exemplo5_FlexDirectionAfetaFlex() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "salmon" }}>
        <Text>flex: 1 (1/3 da LARGURA)</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "khaki" }}>
        <Text>flex: 1 (1/3 da LARGURA)</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "skyblue" }}>
        <Text>flex: 1 (1/3 da LARGURA)</Text>
      </View>
    </View>
  );
}

// Componente auxiliar só pra dar um título e uma altura fixa pra cada
// exemplo dentro da ScrollView (os exemplos usam flex: 1 internamente,
// então cada um precisa de um "container" com altura definida pra esse
// flex: 1 ter algo pra "encher").
function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontWeight: "bold", padding: 8, backgroundColor: "#eee" }}>
        {titulo}
      </Text>
      <View style={{ height: 150 }}>{children}</View>
    </View>
  );
}

/**
 * =============================================================================
 *  RESUMO RÁPIDO — só sobre "flexDirection"
 * =============================================================================
 *  - Define o EIXO PRINCIPAL: "column" (vertical) ou "row" (horizontal).
 *  - No React Native, o padrão é "column" — diferente da web, onde o
 *    padrão do CSS é "row". Essa é a pegadinha nº 1 pra quem já mexeu
 *    com CSS antes.
 *  - "row-reverse" e "column-reverse" mantêm a mesma direção, só
 *    invertem a ORDEM VISUAL dos filhos (o código continua na mesma
 *    ordem, só muda o que aparece primeiro/último na tela).
 *  - flexDirection também muda o que a propriedade "flex" mede: em
 *    "column" ela controla altura, em "row" ela controla largura.
 * =============================================================================
 */