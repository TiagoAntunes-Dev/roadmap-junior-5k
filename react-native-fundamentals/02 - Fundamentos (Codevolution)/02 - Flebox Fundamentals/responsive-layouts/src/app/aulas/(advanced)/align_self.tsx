import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "alignSelf" — só ela, nada mais
// =============================================================================
// "alignSelf" faz a MESMA coisa que "alignItems" (alinha no eixo
// cruzado), só que aplicado a UM ÚNICO FILHO, em vez do container
// inteiro. Ou seja: é como sobrescrever, só pra aquele item específico,
// o que o "alignItems" do pai definiu pra todo mundo.
//
// Aceita os mesmos valores de alignItems: "auto" (padrão — usa o que o
// pai definir), "flex-start", "flex-end", "center", "stretch", "baseline".
export default function AlignSelf() {
  return (
    <ScrollView>
      <Secao titulo='Pai com alignItems: "center" + 1 filho com alignSelf diferente'>
        <Exemplo1_SobrescrevendoUmFilho />
      </Secao>
      <Secao titulo='"auto" (padrão) — segue o alignItems do pai'>
        <Exemplo2_Auto />
      </Secao>
      <Secao titulo="Cada filho com um alignSelf diferente">
        <Exemplo3_TodosDiferentes />
      </Secao>
    </ScrollView>
  );
}

// O container tem alignItems: "center", então TODOS os filhos ficariam
// centralizados por padrão. Mas o segundo filho tem alignSelf:
// "flex-end", que SOBRESCREVE isso só pra ele — ele vai pro final do
// eixo cruzado, enquanto os outros dois continuam centralizados.
export function Exemplo1_SobrescrevendoUmFilho() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <View style={{ width: 60, height: 60, backgroundColor: "tomato" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "gold", alignSelf: "flex-end" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// alignSelf: "auto" é o valor PADRÃO — na prática, é como se o item
// não tivesse alignSelf nenhum: ele simplesmente HERDA o comportamento
// definido pelo alignItems do pai (aqui, "flex-start").
export function Exemplo2_Auto() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start" }}>
      <View style={{ width: 60, height: 60, backgroundColor: "tomato" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "gold", alignSelf: "auto" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Cada filho pode ter um alignSelf TOTALMENTE diferente dos outros,
// independente do que o pai define — aqui nem precisamos nos preocupar
// com o alignItems do pai, porque cada item decide por si só.
export function Exemplo3_TodosDiferentes() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ width: 60, height: 60, backgroundColor: "tomato", alignSelf: "flex-start" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "gold", alignSelf: "center" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "lightgreen", alignSelf: "flex-end" }} />
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
 *  RESUMO RÁPIDO — só sobre "alignSelf"
 * =============================================================================
 *  - É o "alignItems" individual: aplica no filho, não no container.
 *  - Sobrescreve o alignItems do pai SÓ pra aquele item específico.
 *  - "auto" (padrão) = herda o comportamento do alignItems do pai.
 *  - Mesmos valores do alignItems: flex-start, flex-end, center,
 *    stretch, baseline.
 * =============================================================================
 */