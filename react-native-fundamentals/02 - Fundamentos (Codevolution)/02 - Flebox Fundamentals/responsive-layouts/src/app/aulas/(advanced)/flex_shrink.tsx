import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "flexShrink" — só ela, nada mais
// =============================================================================
// "flexShrink" controla se (e o quanto) um item pode ENCOLHER quando
// não há espaço suficiente no container pra todos os itens caberem no
// seu tamanho "ideal" (definido por flexBasis/width). É basicamente o
// oposto do flexGrow: em vez de crescer quando SOBRA espaço, ele
// encolhe quando FALTA espaço.
//
// Valor padrão: 1 (todo item PODE encolher, por padrão, se precisar).
// flexShrink: 0 IMPEDE o item de encolher, mesmo que não caiba tudo.
export default function FlexShrink() {
  return (
    <ScrollView>
      <Secao titulo="flexShrink: 1 (padrão) — todos encolhem igual">
        <Exemplo1_ShrinkPadrao />
      </Secao>
      <Secao titulo="flexShrink: 0 — um item se recusa a encolher">
        <Exemplo2_ShrinkZero />
      </Secao>
      <Secao titulo="flexShrink com valores diferentes — proporção do encolhimento">
        <Exemplo3_ShrinkProporcional />
      </Secao>
    </ScrollView>
  );
}

// Três itens com flexBasis: 150 cada (total: 450px) dentro de um
// container que não tem 450px de largura disponível. Como o padrão de
// flexShrink já é 1, todos encolhem PROPORCIONALMENTE pra caber —
// nenhum "vaza" pra fora da tela.
export function Exemplo1_ShrinkPadrao() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 150, backgroundColor: "tomato" }}>
        <Text>150 (encolhe)</Text>
      </View>
      <View style={{ flexBasis: 150, backgroundColor: "gold" }}>
        <Text>150 (encolhe)</Text>
      </View>
      <View style={{ flexBasis: 150, backgroundColor: "lightgreen" }}>
        <Text>150 (encolhe)</Text>
      </View>
    </View>
  );
}

// Mesmo cenário de antes (não cabe tudo), mas o item do meio tem
// flexShrink: 0 — ele se RECUSA a encolher e mantém seus 150px fixos,
// mesmo que isso empurre os outros dois a encolherem AINDA MAIS pra
// compensar.
export function Exemplo2_ShrinkZero() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 150, backgroundColor: "tomato" }}>
        <Text>150 (encolhe)</Text>
      </View>
      <View style={{ flexBasis: 150, flexShrink: 0, backgroundColor: "gold" }}>
        <Text>150 (NÃO encolhe)</Text>
      </View>
      <View style={{ flexBasis: 150, backgroundColor: "lightgreen" }}>
        <Text>150 (encolhe)</Text>
      </View>
    </View>
  );
}

// Assim como flexGrow, o valor de flexShrink também é uma PROPORÇÃO
// entre os itens — não um valor absoluto. Aqui, o item do meio tem
// flexShrink: 3 (encolhe 3x mais que os outros, que têm o padrão, 1),
// então ele "cede" bem mais espaço proporcionalmente que seus irmãos.
export function Exemplo3_ShrinkProporcional() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 150, backgroundColor: "tomato" }}>
        <Text>encolhe 1x</Text>
      </View>
      <View style={{ flexBasis: 150, flexShrink: 3, backgroundColor: "gold" }}>
        <Text>encolhe 3x mais</Text>
      </View>
      <View style={{ flexBasis: 150, backgroundColor: "lightgreen" }}>
        <Text>encolhe 1x</Text>
      </View>
    </View>
  );
}

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontWeight: "bold", padding: 8, backgroundColor: "#eee" }}>
        {titulo}
      </Text>
      <View style={{ height: 80, backgroundColor: "#fafafa" }}>{children}</View>
    </View>
  );
}

/**
 * =============================================================================
 *  RESUMO RÁPIDO — só sobre "flexShrink"
 * =============================================================================
 *  - Controla se/quanto um item ENCOLHE quando falta espaço.
 *  - Valor padrão: 1 (todo mundo pode encolher, se precisar).
 *  - flexShrink: 0 = o item se recusa a encolher, mantém seu tamanho
 *    (flexBasis/width) mesmo sem caber tudo.
 *  - Valores maiores = encolhe PROPORCIONALMENTE mais que os irmãos
 *    (mesma lógica de proporção do flexGrow, só que ao contrário).
 * =============================================================================
 */