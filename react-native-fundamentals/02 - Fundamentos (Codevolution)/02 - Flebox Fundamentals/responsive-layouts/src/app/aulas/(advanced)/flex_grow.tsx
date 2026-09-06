import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "flexGrow" — só ela, nada mais
// =============================================================================
// "flexGrow" controla se (e o quanto) um item CRESCE pra ocupar o
// espaço EXTRA que sobra no container, além do seu tamanho inicial
// (flexBasis/width). É o oposto do flexShrink.
//
// Valor padrão: 0 (por padrão, NENHUM item cresce — cada um fica do
// tamanho do próprio conteúdo/flexBasis, e o espaço extra simplesmente
// sobra sem uso).
//
// OBS: "flex: 1" que a gente usou lá no primeiro arquivo é, na
// verdade, um ATALHO que define flexGrow, flexShrink E flexBasis de
// uma vez só (flex: 1 equivale a flexGrow: 1, flexShrink: 1,
// flexBasis: 0%). Aqui vamos usar só o flexGrow isoladamente.
export default function FlexGrow() {
  return (
    <ScrollView>
      <Secao titulo="flexGrow: 0 (padrão) — ninguém cresce, sobra espaço">
        <Exemplo1_GrowZero />
      </Secao>
      <Secao titulo="Só um item com flexGrow: 1 — só ele cresce">
        <Exemplo2_UmItemCresce />
      </Secao>
      <Secao titulo="Todos com flexGrow: 1 — dividem o espaço extra igual">
        <Exemplo3_TodosCrescemIgual />
      </Secao>
      <Secao titulo="flexGrow proporcional (1 / 2 / 1)">
        <Exemplo4_GrowProporcional />
      </Secao>
    </ScrollView>
  );
}

// Três itens com flexBasis: 60 cada, num container bem mais largo que
// isso. Como flexGrow padrão é 0, NINGUÉM cresce pra preencher o
// espaço sobrando — ele simplesmente fica vazio à direita.
export function Exemplo1_GrowZero() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 60, backgroundColor: "tomato" }}>
        <Text>60</Text>
      </View>
      <View style={{ flexBasis: 60, backgroundColor: "gold" }}>
        <Text>60</Text>
      </View>
      <View style={{ flexBasis: 60, backgroundColor: "lightgreen" }}>
        <Text>60</Text>
      </View>
    </View>
  );
}

// Mesmo cenário, mas o item do meio tem flexGrow: 1 — ele "absorve"
// SOZINHO todo o espaço extra que sobra, enquanto os outros dois
// continuam do tamanho original (60px).
export function Exemplo2_UmItemCresce() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 60, backgroundColor: "tomato" }}>
        <Text>60 fixo</Text>
      </View>
      <View style={{ flexBasis: 60, flexGrow: 1, backgroundColor: "gold" }}>
        <Text>cresce sozinho</Text>
      </View>
      <View style={{ flexBasis: 60, backgroundColor: "lightgreen" }}>
        <Text>60 fixo</Text>
      </View>
    </View>
  );
}

// Todos com flexGrow: 1 — o espaço extra é dividido IGUALMENTE entre
// os três, além do tamanho inicial (flexBasis) de cada um.
export function Exemplo3_TodosCrescemIgual() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 60, flexGrow: 1, backgroundColor: "tomato" }}>
        <Text>cresce</Text>
      </View>
      <View style={{ flexBasis: 60, flexGrow: 1, backgroundColor: "gold" }}>
        <Text>cresce</Text>
      </View>
      <View style={{ flexBasis: 60, flexGrow: 1, backgroundColor: "lightgreen" }}>
        <Text>cresce</Text>
      </View>
    </View>
  );
}

// Assim como no "flex" puro, os valores de flexGrow formam uma
// PROPORÇÃO entre si: o item do meio (flexGrow: 2) recebe o DOBRO do
// espaço extra em relação aos outros dois (flexGrow: 1 cada).
export function Exemplo4_GrowProporcional() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 40, flexGrow: 1, backgroundColor: "salmon" }}>
        <Text>cresce 1x</Text>
      </View>
      <View style={{ flexBasis: 40, flexGrow: 2, backgroundColor: "khaki" }}>
        <Text>cresce 2x</Text>
      </View>
      <View style={{ flexBasis: 40, flexGrow: 1, backgroundColor: "skyblue" }}>
        <Text>cresce 1x</Text>
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
 *  RESUMO RÁPIDO — só sobre "flexGrow"
 * =============================================================================
 *  - Controla se/quanto um item CRESCE pra ocupar o espaço extra
 *    sobrando no container.
 *  - Valor padrão: 0 (ninguém cresce — o espaço extra fica vazio).
 *  - Valores maiores = cresce PROPORCIONALMENTE mais que os irmãos.
 *  - "flex: 1" é um atalho que já inclui flexGrow: 1 (junto com
 *    flexShrink: 1 e flexBasis: 0%) — por isso ele "parece" fazer tudo
 *    de uma vez.
 * =============================================================================
 */