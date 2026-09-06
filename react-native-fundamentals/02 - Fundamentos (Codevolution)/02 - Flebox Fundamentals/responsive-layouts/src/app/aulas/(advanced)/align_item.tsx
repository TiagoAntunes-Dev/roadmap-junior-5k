import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "alignItems" — só ela, nada mais
// =============================================================================
// "alignItems" alinha os filhos ao longo do EIXO CRUZADO (o eixo
// PERPENDICULAR ao que "flexDirection" define). Ou seja, é o "irmão"
// do justifyContent — só que no outro eixo:
// - Em flexDirection: "column" (padrão) -> alinha na HORIZONTAL.
// - Em flexDirection: "row" -> alinha na VERTICAL.
//
// Todos os exemplos abaixo usam flexDirection: "row" (padrão da coluna
// fica meio óbvio, e assim dá pra ver melhor o alinhamento vertical).
export default function AlignItems() {
  return (
    <ScrollView>
      <Secao titulo='"stretch" (padrão) — estica pra preencher a altura'>
        <Exemplo1_Stretch />
      </Secao>
      <Secao titulo='"flex-start" — cola no topo'>
        <Exemplo2_FlexStart />
      </Secao>
      <Secao titulo='"flex-end" — cola embaixo'>
        <Exemplo3_FlexEnd />
      </Secao>
      <Secao titulo='"center" — centraliza no eixo cruzado'>
        <Exemplo4_Center />
      </Secao>
      <Secao titulo='"baseline" — alinha pela linha de base do texto'>
        <Exemplo5_Baseline />
      </Secao>
    </ScrollView>
  );
}

// "stretch" é o valor PADRÃO: os filhos são esticados pra preencher
// TODA a altura do container cruzado — MAS só se eles não tiverem uma
// altura própria definida (aqui removemos "height" de propósito pra
// esse efeito aparecer).
export function Exemplo1_Stretch() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch" }}>
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

// Cola todos os filhos no INÍCIO do eixo cruzado (topo, numa row).
// Aqui os filhos têm altura própria (60), então dá pra ver a diferença
// clara em relação ao "stretch".
export function Exemplo2_FlexStart() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start" }}>
      <View style={{ width: 60, height: 60, backgroundColor: "tomato" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "gold" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Cola todos os filhos no FINAL do eixo cruzado (embaixo, numa row).
export function Exemplo3_FlexEnd() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}>
      <View style={{ width: 60, height: 60, backgroundColor: "tomato" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "gold" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Centraliza os filhos no MEIO do eixo cruzado.
export function Exemplo4_Center() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <View style={{ width: 60, height: 60, backgroundColor: "tomato" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "gold" }} />
      <View style={{ width: 60, height: 60, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// Alinha os filhos pela LINHA DE BASE do texto interno deles — útil
// quando você tem textos com tamanhos de fonte diferentes e quer que
// as "letras" fiquem alinhadas na mesma linha, não as caixas inteiras.
export function Exemplo5_Baseline() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "baseline" }}>
      <View style={{ backgroundColor: "tomato", padding: 4 }}>
        <Text style={{ fontSize: 12 }}>fonte pequena</Text>
      </View>
      <View style={{ backgroundColor: "gold", padding: 4 }}>
        <Text style={{ fontSize: 32 }}>fonte grande</Text>
      </View>
      <View style={{ backgroundColor: "lightgreen", padding: 4 }}>
        <Text style={{ fontSize: 18 }}>fonte média</Text>
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
      <View style={{ height: 100, backgroundColor: "#fafafa" }}>{children}</View>
    </View>
  );
}

/**
 * =============================================================================
 *  RESUMO RÁPIDO — só sobre "alignItems"
 * =============================================================================
 *  - Alinha os filhos no EIXO CRUZADO (perpendicular ao flexDirection).
 *  - "stretch" (padrão) estica os filhos pra preencher o eixo cruzado,
 *    a MENOS que eles já tenham um tamanho próprio definido.
 *  - flex-start / flex-end / center funcionam igual ao justifyContent,
 *    só que no outro eixo.
 *  - "baseline" é o valor mais específico: alinha pelo texto, não pela
 *    borda da caixa.
 * =============================================================================
 */