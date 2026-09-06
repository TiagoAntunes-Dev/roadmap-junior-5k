import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "gap" — só ela, nada mais
// =============================================================================
// "gap" cria um espaço FIXO entre os filhos de um container flex —
// mas só ENTRE eles, nunca nas bordas externas (diferente de padding,
// que afeta as bordas, ou margin, que você teria que aplicar item por
// item manualmente).
//
// Antes do "gap" existir no React Native, o jeito de dar espaço entre
// itens era colocar marginRight/marginBottom em cada item (e ter que
// remover do último, senão sobrava espaço extra na ponta) — o "gap"
// resolve isso de um jeito muito mais simples.
//
// Existem 3 variações: "gap" (afeta os dois eixos), "rowGap" (só entre
// linhas) e "columnGap" (só entre colunas).
export default function Gap() {
  return (
    <ScrollView>
      <Secao titulo='"gap" — espaço entre itens em linha (row)'>
        <Exemplo1_GapRow />
      </Secao>
      <Secao titulo='"gap" — espaço entre itens em coluna (column)'>
        <Exemplo2_GapColumn />
      </Secao>
      <Secao titulo='"gap" com flexWrap — espaça linhas E colunas ao mesmo tempo'>
        <Exemplo3_GapComWrap />
      </Secao>
      <Secao titulo='"rowGap" e "columnGap" — controlando cada eixo separado'>
        <Exemplo4_RowGapColumnGap />
      </Secao>
    </ScrollView>
  );
}

// gap: 10 cria 10px de espaço ENTRE cada item na horizontal — repare
// que não tem espaço nem antes do primeiro, nem depois do último item.
export function Exemplo1_GapRow() {
  return (
    <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
      <View style={{ width: 60, height: 60, backgroundColor: "tomato" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "gold" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Mesma ideia, só que na vertical (flexDirection padrão, "column").
export function Exemplo2_GapColumn() {
  return (
    <View style={{ flex: 1, gap: 10 }}>
      <View style={{ height: 40, backgroundColor: "tomato" }} />
      <View style={{ height: 40, backgroundColor: "gold" }} />
      <View style={{ height: 40, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Quando combinado com flexWrap: "wrap", o "gap" espaça tanto os itens
// DENTRO de cada linha quanto o espaço ENTRE as linhas — de um jeito
// consistente, sem precisar calcular margin manualmente em cada item.
export function Exemplo3_GapComWrap() {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View key={n} style={{ width: 80, height: 50, backgroundColor: n % 2 ? "tomato" : "gold" }}>
          <Text>{n}</Text>
        </View>
      ))}
    </View>
  );
}

// "rowGap" controla só o espaço ENTRE LINHAS (eixo vertical, quando
// tem quebra de linha), e "columnGap" controla só o espaço ENTRE
// COLUNAS (eixo horizontal) — dá pra usar valores DIFERENTES pra cada
// eixo, coisa que "gap" sozinho não permite (ele usa o mesmo valor
// pros dois).
export function Exemplo4_RowGapColumnGap() {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", rowGap: 20, columnGap: 4 }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View key={n} style={{ width: 80, height: 50, backgroundColor: n % 2 ? "tomato" : "gold" }}>
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
      <View style={{ height: 120, backgroundColor: "#fafafa" }}>{children}</View>
    </View>
  );
}

/**
 * =============================================================================
 *  RESUMO RÁPIDO — só sobre "gap"
 * =============================================================================
 *  - Cria espaço fixo SÓ ENTRE os filhos — nunca nas bordas externas.
 *  - Mais simples que colocar margin item por item (e sem precisar
 *    remover a margin do último item manualmente).
 *  - "gap" afeta os dois eixos ao mesmo tempo.
 *  - "rowGap" (entre linhas) e "columnGap" (entre colunas) permitem
 *    valores diferentes pra cada eixo.
 * =============================================================================
 */