import React from "react";
import { ScrollView, Text, View } from "react-native";

// =============================================================================
// A PROPRIEDADE "flex" — só ela, nada mais
// =============================================================================
// "flex" controla quanto espaço um elemento deve OCUPAR dentro do seu
// container pai, em relação aos seus "irmãos" (outros elementos no
// mesmo nível). É um número, sem unidade — não é pixel, nem porcentagem.
//
// No React Native (diferente da web, onde flex por padrão é horizontal),
// o eixo principal padrão é o VERTICAL. Ou seja: por padrão, "flex"
// controla quanta ALTURA cada elemento ocupa.
//
// IMPORTANTE: o Expo Router só renderiza o "export default" de cada
// arquivo de rota — os outros exports nomeados (Exemplo1, Exemplo2...)
// existem no arquivo, mas nada os chama sozinho. Por isso o "default"
// aqui embaixo renderiza todos eles dentro de uma ScrollView, cada um
// com uma altura fixa, só pra dar pra ver e comparar os 5 na prática.
export default function Flex() {
  return (
    <ScrollView>
      <Secao titulo="Exemplo 1 — flex: 1 na raiz">
        <Exemplo1_FlexNaRaiz />
      </Secao>

      <Secao titulo="Exemplo 2 — flex igual entre irmãos">
        <Exemplo2_FlexIgualEntreIrmaos />
      </Secao>

      <Secao titulo="Exemplo 3 — flex proporcional (1 / 2 / 1)">
        <Exemplo3_FlexProporcional />
      </Secao>

      <Secao titulo="Exemplo 4 — misturando flex com altura fixa">
        <Exemplo4_MisturandoFlexEAlturaFixa />
      </Secao>

      <Secao titulo="Exemplo 5 — flex: 0">
        <Exemplo5_FlexZero />
      </Secao>
    </ScrollView>
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

// -----------------------------------------------------------------------
// EXEMPLO 1 — flex: 1 num container "raiz"
// -----------------------------------------------------------------------
// Esse é o caso mais comum que você já viu em quase todo App.js/index.tsx
// que a gente mexeu até agora: flex: 1 na View raiz faz ela ocupar TODA
// a altura disponível da tela (o "1" aqui significa "pegue 100% do
// espaço livre que existir", já que não tem nenhum irmão disputando
// espaço com ela).
export function Exemplo1_FlexNaRaiz() {
  return (
    <View style={{ flex: 1, backgroundColor: "lightblue" }}>
      <Text>Ocupo 100% da tela porque sou o único elemento com flex.</Text>
    </View>
  );
}

// -----------------------------------------------------------------------
// EXEMPLO 2 — flex dividindo espaço entre IRMÃOS (mesma proporção)
// -----------------------------------------------------------------------
// Quando VÁRIOS elementos irmãos têm "flex", o espaço disponível do pai
// é DIVIDIDO entre eles, proporcionalmente ao valor de "flex" de cada
// um. Aqui, os três têm flex: 1 — ou seja, mesma "força" — então cada
// um fica com exatamente 1/3 da altura do container pai.
export function Exemplo2_FlexIgualEntreIrmaos() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}>
        <Text>flex: 1 (1/3 do espaço)</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "gold" }}>
        <Text>flex: 1 (1/3 do espaço)</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "lightgreen" }}>
        <Text>flex: 1 (1/3 do espaço)</Text>
      </View>
    </View>
  );
}

// -----------------------------------------------------------------------
// EXEMPLO 3 — flex com valores DIFERENTES (proporção desigual)
// -----------------------------------------------------------------------
// Aqui é onde o número realmente importa: os valores de "flex" formam
// uma RAZÃO entre si. Somando 1 + 2 + 1 = 4 "partes" no total. Cada
// elemento recebe a fração correspondente ao seu número dividido pelo
// total:
//   - flex: 1 -> 1/4 do espaço (25%)
//   - flex: 2 -> 2/4 do espaço (50%)
//   - flex: 1 -> 1/4 do espaço (25%)
// Não importa se os números são 1, 2, 1 ou 10, 20, 10 — a PROPORÇÃO
// final é idêntica, porque o que importa é a razão entre eles, não o
// valor absoluto.
export function Exemplo3_FlexProporcional() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "salmon" }}>
        <Text>flex: 1 (25%)</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "khaki" }}>
        <Text>flex: 2 (50% — o dobro dos outros)</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "skyblue" }}>
        <Text>flex: 1 (25%)</Text>
      </View>
    </View>
  );
}

// -----------------------------------------------------------------------
// EXEMPLO 4 — elemento SEM flex, misturado com elementos COM flex
// -----------------------------------------------------------------------
// Se um elemento não tem "flex" (ou tem uma altura fixa definida via
// "height"), ele ocupa exatamente o espaço do seu conteúdo (ou da
// altura fixa), e o espaço RESTANTE é que fica disponível pra ser
// dividido entre os irmãos que têm "flex".
//
// Aqui, o cabeçalho tem altura fixa (60px) — ele não cresce nem
// encolhe. O conteúdo do meio (flex: 1) consome todo o espaço restante
// da tela. E o rodapé também tem altura fixa (40px).
export function Exemplo4_MisturandoFlexEAlturaFixa() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 60, backgroundColor: "darkslategray" }}>
        <Text style={{ color: "white" }}>Header (altura fixa: 60px)</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "honeydew" }}>
        <Text>Conteúdo (flex: 1 — pega todo o espaço restante)</Text>
      </View>

      <View style={{ height: 40, backgroundColor: "darkslategray" }}>
        <Text style={{ color: "white" }}>Footer (altura fixa: 40px)</Text>
      </View>
    </View>
  );
}

// -----------------------------------------------------------------------
// EXEMPLO 5 — flex: 0 (o elemento NÃO participa da divisão de espaço)
// -----------------------------------------------------------------------
// flex: 0 é bem diferente de "não ter flex nenhum" às vezes causa
// confusão: com flex: 0, o elemento também some do cálculo de divisão
// de espaço (fica do tamanho do próprio conteúdo, igual quando não
// tem "flex" nenhum) — na prática, pra fins de layout, o mais comum é
// nem escrever "flex: 0" e simplesmente omitir a propriedade.
export function Exemplo5_FlexZero() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0, backgroundColor: "lightpink" }}>
        <Text>flex: 0 (só o tamanho do próprio conteúdo)</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "lightcyan" }}>
        <Text>flex: 1 (pega o resto do espaço)</Text>
      </View>
    </View>
  );
}

/**
 * =============================================================================
 *  RESUMO RÁPIDO — só sobre "flex"
 * =============================================================================
 *  - "flex" é um NÚMERO sem unidade, não pixel/porcentagem.
 *  - Um único elemento com flex: 1 (sem irmãos com flex) ocupa TODO o
 *    espaço disponível do pai.
 *  - Vários irmãos com flex dividem o espaço PROPORCIONALMENTE entre si
 *    (soma os valores, cada um pega sua fração do total).
 *  - Elementos SEM flex (ou com height fixo) ocupam só o tamanho do seu
 *    conteúdo/altura definida — sobra o resto pros que têm flex.
 *  - flex: 0 e "sem flex nenhum" se comportam de forma parecida: o
 *    elemento fica do tamanho do próprio conteúdo.
 * =============================================================================
 */