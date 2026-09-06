import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "flexWrap" — só ela, nada mais
// =============================================================================
// "flexWrap" controla o que acontece quando os filhos NÃO CABEM todos
// numa única linha/coluna: eles continuam espremidos na mesma linha
// (padrão), ou "quebram" pra próxima linha, como texto quebrando linha
// num parágrafo.
//
// Valores: "nowrap" (padrão — não quebra, espreme tudo numa linha só),
// "wrap" (quebra pra próxima linha quando não cabe), "wrap-reverse"
// (quebra, mas as linhas extras aparecem ao contrário).
export default function FlexWrap() {
  return (
    <ScrollView>
      <Secao titulo='"nowrap" (padrão) — não quebra, espreme tudo'>
        <Exemplo1_NoWrap />
      </Secao>
      <Secao titulo='"wrap" — quebra pra próxima linha quando não cabe'>
        <Exemplo2_Wrap />
      </Secao>
      <Secao titulo='"wrap-reverse" — quebra, mas linhas na ordem inversa'>
        <Exemplo3_WrapReverse />
      </Secao>
    </ScrollView>
  );
}

// 6 caixas de 80px de largura cada, dentro de um container "row" que
// não tem espaço pra todas (a tela normalmente tem uns 350-400px de
// largura). Com "nowrap" (padrão), o React Native simplesmente
// ESPREME/corta tudo numa linha só, mesmo sem caber direito.
export function Exemplo1_NoWrap() {
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "nowrap" }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View key={n} style={{ width: 80, height: 60, backgroundColor: n % 2 ? "tomato" : "gold" }}>
          <Text>{n}</Text>
        </View>
      ))}
    </View>
  );
}

// Mesmas 6 caixas, mas agora com flexWrap: "wrap" — quando não cabe
// mais nenhuma caixa na linha atual, o React Native automaticamente
// "quebra" e continua colocando as próximas numa NOVA linha, de cima
// pra baixo.
export function Exemplo2_Wrap() {
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View key={n} style={{ width: 80, height: 60, backgroundColor: n % 2 ? "tomato" : "gold" }}>
          <Text>{n}</Text>
        </View>
      ))}
    </View>
  );
}

// Igual "wrap", mas as linhas extras aparecem na ORDEM INVERSA: a
// primeira linha do código acaba aparecendo por ÚLTIMO (embaixo), e as
// linhas seguintes vão "empilhando" por cima dela.
export function Exemplo3_WrapReverse() {
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap-reverse" }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View key={n} style={{ width: 80, height: 60, backgroundColor: n % 2 ? "tomato" : "gold" }}>
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
      <View style={{ height: 130, backgroundColor: "#fafafa" }}>{children}</View>
    </View>
  );
}

/**
 * =============================================================================
 *  RESUMO RÁPIDO — só sobre "flexWrap"
 * =============================================================================
 *  - Controla se os filhos QUEBRAM pra próxima linha quando não cabem.
 *  - "nowrap" (padrão) espreme tudo numa linha só, sem quebrar.
 *  - "wrap" quebra normalmente, como texto quebrando linha.
 *  - "wrap-reverse" quebra, mas as linhas extras vêm na ordem inversa.
 *  - Só faz sentido combinado com "alignContent" quando tem MAIS de uma
 *    linha (é o próximo arquivo que a gente vai ver).
 * =============================================================================
 */