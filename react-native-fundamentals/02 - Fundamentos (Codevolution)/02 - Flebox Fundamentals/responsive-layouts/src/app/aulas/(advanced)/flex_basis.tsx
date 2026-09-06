import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "flexBasis" — só ela, nada mais
// =============================================================================
// "flexBasis" define o TAMANHO INICIAL de um item no eixo principal,
// ANTES de qualquer crescimento (flexGrow) ou encolhimento (flexShrink)
// entrarem em ação. Pense nele como um "width"/"height" de ponto de
// partida — só que ele respeita o eixo principal automaticamente (em
// "row" ele vira largura, em "column" vira altura), diferente de
// escrever width/height fixo na mão.
//
// Valor padrão: "auto" (usa o tamanho do próprio conteúdo, ou o
// width/height se você tiver definido um).
export default function FlexBasis() {
  return (
    <ScrollView>
      <Secao titulo='flexBasis: "auto" (padrão) — tamanho do conteúdo'>
        <Exemplo1_Auto />
      </Secao>
      <Secao titulo="flexBasis com valor fixo (em pixels)">
        <Exemplo2_ValorFixo />
      </Secao>
      <Secao titulo="flexBasis vs width — o resultado costuma ser igual">
        <Exemplo3_FlexBasisVsWidth />
      </Secao>
      <Secao titulo="flexBasis como ponto de partida pro flexGrow">
        <Exemplo4_BaseParaFlexGrow />
      </Secao>
    </ScrollView>
  );
}

// Sem flexBasis definido (ou com "auto"), cada item ocupa só o espaço
// do seu próprio conteúdo — nada cresce nem encolhe artificialmente.
export function Exemplo1_Auto() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: "auto", backgroundColor: "tomato", padding: 10 }}>
        <Text>curto</Text>
      </View>
      <View style={{ flexBasis: "auto", backgroundColor: "gold", padding: 10 }}>
        <Text>um pouco mais longo</Text>
      </View>
    </View>
  );
}

// flexBasis: 100 dá 100px de tamanho INICIAL pro item, no eixo
// principal (aqui, "row" -> vira largura). Repare que isso acontece
// independente de quanto texto tem dentro.
export function Exemplo2_ValorFixo() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 100, backgroundColor: "tomato" }}>
        <Text>100px</Text>
      </View>
      <View style={{ flexBasis: 100, backgroundColor: "gold" }}>
        <Text>100px também</Text>
      </View>
    </View>
  );
}

// Na prática, quando você só quer um tamanho fixo simples, flexBasis e
// width dão praticamente o mesmo resultado visual. A diferença real
// aparece quando existe flexGrow/flexShrink em jogo (próximo exemplo)
// — nesse caso, flexBasis é o ponto de partida "oficial" do sistema
// flex, enquanto width é tratado como uma sugestão que pode ser
// sobrescrita pelo grow/shrink.
export function Exemplo3_FlexBasisVsWidth() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 120, backgroundColor: "tomato" }}>
        <Text>flexBasis: 120</Text>
      </View>
      <View style={{ width: 120, backgroundColor: "gold" }}>
        <Text>width: 120</Text>
      </View>
    </View>
  );
}

// flexBasis: 60 dá 60px de tamanho INICIAL pra cada item — depois
// disso, o flexGrow: 1 (que veremos em detalhe no próprio arquivo
// sobre flexGrow) distribui o espaço RESTANTE igualmente entre os
// itens, somando aos 60px iniciais de cada um.
export function Exemplo4_BaseParaFlexGrow() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexBasis: 60, flexGrow: 1, backgroundColor: "tomato" }}>
        <Text>base 60 + cresce</Text>
      </View>
      <View style={{ flexBasis: 60, flexGrow: 1, backgroundColor: "gold" }}>
        <Text>base 60 + cresce</Text>
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
 *  RESUMO RÁPIDO — só sobre "flexBasis"
 * =============================================================================
 *  - Define o tamanho INICIAL do item no eixo principal, antes de
 *    crescer (flexGrow) ou encolher (flexShrink).
 *  - "auto" (padrão) = tamanho do próprio conteúdo.
 *  - Respeita o eixo principal automaticamente (largura em row, altura
 *    em column) — diferente de width/height, que são sempre fixos num
 *    eixo específico.
 *  - É o "ponto de partida oficial" do sistema flex — funciona melhor
 *    combinado com flexGrow/flexShrink do que sozinho.
 * =============================================================================
 */