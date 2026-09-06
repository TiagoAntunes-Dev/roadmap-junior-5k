import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "position" — "relative" e "absolute"
// =============================================================================
// "position" controla COMO um elemento é posicionado dentro do seu
// container. No React Native, existem 2 valores principais:
//
// - "relative" (PADRÃO): o elemento segue o fluxo normal do Flexbox —
//   é exatamente o que a gente já vinha fazendo até agora, sem nem
//   precisar escrever "position: relative" (já é o comportamento padrão).
//
// - "absolute": o elemento SAI do fluxo normal do Flexbox — ele para
//   de "empurrar" ou ser empurrado pelos irmãos, e passa a ser
//   posicionado usando "top", "left", "right", "bottom" em relação ao
//   container pai mais próximo (desde que esse pai não seja "static" —
//   no React Native, na prática, qualquer View já serve de referência).
export default function RelativeAndAbsolute() {
  return (
    <ScrollView>
      <Secao titulo='"relative" (padrão) — segue o fluxo normal'>
        <Exemplo1_Relative />
      </Secao>
      <Secao titulo='"absolute" — sai do fluxo, flutua por cima'>
        <Exemplo2_Absolute />
      </Secao>
      <Secao titulo="Badge/selo no canto de um card (uso clássico)">
        <Exemplo3_BadgeNoCanto />
      </Secao>
      <Secao titulo="Elemento absoluto cobrindo o pai inteiro">
        <Exemplo4_CobrirTudo />
      </Secao>
      <Secao titulo="Vários elementos absolutos empilhados (z-index)">
        <Exemplo5_ZIndex />
      </Secao>
    </ScrollView>
  );
}

// Com "relative" (ou sem escrever "position" nenhum — dá no mesmo),
// os três quadrados seguem o fluxo normal: cada um "empurra" o
// próximo, exatamente como já vínhamos vendo desde o começo com flex.
export function Exemplo1_Relative() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ position: "relative", width: 60, height: 60, backgroundColor: "tomato" }} />
      <View style={{ position: "relative", width: 60, height: 60, backgroundColor: "gold" }} />
      <View style={{ position: "relative", width: 60, height: 60, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// O quadrado do meio agora tem position: "absolute" — ele SAI do
// fluxo do Flexbox (por isso o quadrado verde "cola" no lugar que era
// do dourado, como se o dourado nem existisse mais nesse cálculo de
// layout). E o dourado passa a ser posicionado via "top"/"left", como
// se estivesse "flutuando" por cima de tudo.
export function Exemplo2_Absolute() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ width: 60, height: 60, backgroundColor: "tomato" }} />
      <View
        style={{
          position: "absolute",
          top: 1,
          left: 20,
          width: 60,
          height: 60,
          backgroundColor: "black",
        }}
      />
      <View style={{ width: 60, height: 60, backgroundColor: "lightgreen" }} />
    </View>
  );
}

// O uso mais comum de "absolute" no dia a dia: um "selo"/badge
// flutuando no canto de um card, sem interferir no layout do conteúdo
// normal do card. Repare que o container do card precisa ter algum
// tamanho (aqui, height: 120) pra servir de referência pro badge.
export function Exemplo3_BadgeNoCanto() {
  return (
    <View style={{ width: 200, height: 120, backgroundColor: "#eee", borderRadius: 8 }}>
      <Text style={{ padding: 12 }}>Conteúdo normal do card...</Text>

      <View
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "tomato",
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white", fontSize: 12 }}>NOVO</Text>
      </View>
    </View>
  );
}

// Definindo top: 0, left: 0, right: 0 e bottom: 0 ao mesmo tempo, o
// elemento absoluto se ESTICA pra cobrir o pai INTEIRO — é o jeito
// mais comum de fazer um "overlay" (tipo uma camada escura por cima de
// uma imagem, ou um spinner de carregamento cobrindo a tela toda).
export function Exemplo4_CobrirTudo() {
  return (
    <View style={{ width: 200, height: 120, backgroundColor: "skyblue" }}>
      <Text style={{ padding: 12 }}>Conteúdo por trás</Text>

      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white" }}>Overlay por cima</Text>
      </View>
    </View>
  );
}

// Quando vários elementos absolutos se sobrepõem, quem aparece "por
// cima" de quem é decidido pela ORDEM no código (o que vem DEPOIS fica
// por cima) — a menos que você use "zIndex" pra forçar uma ordem
// diferente, como no quadrado verde aqui embaixo, que tem zIndex maior
// e por isso aparece por cima mesmo vindo primeiro no código.
export function Exemplo5_ZIndex() {
  return (
    <View style={{ width: 150, height: 150 }}>
      <View
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 80,
          height: 80,
          backgroundColor: "lightgreen",
          zIndex: 2, // fica por cima, mesmo vindo primeiro no código! força quem tem o maior número a ficar no topo.
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 80,
          height: 80,
          backgroundColor: "tomato",
          zIndex: 1,
        }}
      />
    </View>
  );
}

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontWeight: "bold", padding: 8, backgroundColor: "#eee" }}>
        {titulo}
      </Text>
      <View style={{ minHeight: 100, padding: 12, backgroundColor: "#fafafa" }}>{children}</View>
    </View>
  );
}

/**
 * =============================================================================
 *  RESUMO RÁPIDO — "position: relative" vs "position: absolute"
 * =============================================================================
 *  - "relative" (padrão) = segue o fluxo normal do Flexbox, como tudo
 *    que a gente já vinha fazendo.
 *  - "absolute" = SAI do fluxo — não empurra nem é empurrado pelos
 *    irmãos, flutua por cima usando top/left/right/bottom em relação
 *    ao pai.
 *  - top/left/right/bottom TODOS definidos ao mesmo tempo = o
 *    elemento se estica pra cobrir o pai inteiro (ótimo pra overlays).
 *  - Uso mais comum: badges/selos em cantos de cards, overlays,
 *    elementos flutuantes que não devem afetar o layout ao redor.
 *  - "zIndex" decide quem fica por cima quando elementos absolutos se
 *    sobrepõem (maior zIndex = mais em cima).
 * =============================================================================
 */