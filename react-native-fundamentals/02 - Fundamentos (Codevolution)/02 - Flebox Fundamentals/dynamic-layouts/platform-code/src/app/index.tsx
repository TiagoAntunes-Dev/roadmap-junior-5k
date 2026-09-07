import React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";

// =============================================================================
// PLATFORM-SPECIFIC CODE — código específico por plataforma
// =============================================================================
// Às vezes você precisa que uma parte do app se comporte ou apareça de
// um jeito no iOS, de outro no Android, e talvez ainda diferente na
// web. O React Native oferece 2 jeitos principais de fazer isso:
//
// 1) O módulo "Platform", com Platform.OS e Platform.select() — pra
//    lógica/estilo condicional DENTRO do mesmo arquivo.
//
// 2) Extensões de arquivo específicas (.ios.tsx / .android.tsx / .web.tsx)
//    — pra quando o componente inteiro precisa ser bem diferente entre
//    plataformas, o Metro (bundler) escolhe sozinho o arquivo certo.
export default function PlatformSpecific() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Secao titulo="Platform.OS — saber em qual plataforma está rodando">
        <Exemplo1_PlatformOS />
      </Secao>
      <Secao titulo="Platform.select() — escolher um valor por plataforma">
        <Exemplo2_PlatformSelect />
      </Secao>
      <Secao titulo="Platform.select() aplicado num estilo inteiro">
        <Exemplo3_EstiloPorPlataforma />
      </Secao>
      <Secao titulo="Platform.Version — versão do sistema operacional">
        <Exemplo4_PlatformVersion />
      </Secao>
    </ScrollView>
  );
}

// Platform.OS retorna uma string dizendo em qual plataforma o app está
// rodando: "ios", "android", ou "web" (quando rodando via navegador).
// Dá pra usar isso em qualquer lógica condicional normal do JS/TS —
// if, ternário, etc.
export function Exemplo1_PlatformOS() {
  return (
    <View>
      <Text>Rodando em: {Platform.OS}</Text>

      {Platform.OS === "ios" && <Text>Você está no iOS! 🍎</Text>}
      {Platform.OS === "android" && <Text>Você está no Android! 🤖</Text>}
      {Platform.OS === "web" && <Text>Você está na Web! 🌐</Text>}
    </View>
  );
}

// Platform.select() é um jeito mais direto de escrever a mesma lógica
// do exemplo acima, mas retornando um VALOR (não só um bloco de JSX).
// Ele recebe um objeto com chaves "ios", "android", "web" (e "default"
// como fallback pra qualquer plataforma não listada) e retorna o valor
// que bate com a plataforma atual.
export function Exemplo2_PlatformSelect() {
  const mensagem = Platform.select({
    ios: "Mensagem só pro iOS",
    android: "Mensagem só pro Android",
    default: "Mensagem padrão (web ou qualquer outra)",
  });

  return <Text>{mensagem}</Text>;
}

// O uso mais comum na prática: ajustar pequenas diferenças de ESTILO
// entre plataformas — por exemplo, o iOS e o Android têm convenções
// diferentes de sombra (o iOS usa shadowColor/shadowOffset/shadowRadius,
// o Android usa "elevation"). Platform.select() dentro do StyleSheet
// resolve isso de forma limpa, sem precisar de "if" espalhado pelo
// código.
export function Exemplo3_EstiloPorPlataforma() {
  return (
    <View style={styles.card}>
      <Text>Esse card tem sombra "nativa" de cada plataforma</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

// Platform.Version dá a versão do sistema operacional — no Android é
// um número (nível da API, ex: 33), no iOS é uma string com a versão
// (ex: "17.4"). Útil quando algum recurso só existe a partir de certa
// versão do SO.
export function Exemplo4_PlatformVersion() {
  return (
    <Text>
      Versão do SO: {Platform.Version} ({Platform.OS})
    </Text>
  );
}

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontWeight: "bold", padding: 8, backgroundColor: "#eee" }}>
        {titulo}
      </Text>
      <View style={{ padding: 12, backgroundColor: "#fafafa" }}>{children}</View>
    </View>
  );
}

/**
 * =============================================================================
 *  BÔNUS — Extensões de arquivo específicas por plataforma
 * =============================================================================
 * Quando a diferença entre plataformas é GRANDE (o componente inteiro
 * muda, não só um estilo), em vez de encher o arquivo de "if", dá pra
 * criar arquivos SEPARADOS com extensões especiais. O Metro (bundler)
 * escolhe automaticamente o arquivo certo pra cada plataforma, sem
 * você precisar importar de forma diferente:
 *
 *   components/
 *   ├── Button.ios.tsx       -> usado só quando builda pro iOS
 *   ├── Button.android.tsx   -> usado só quando builda pro Android
 *   ├── Button.web.tsx       -> usado só quando builda pra Web
 *   └── Button.tsx           -> fallback, usado se não existir uma
 *                                versão específica da plataforma atual
 *
 * Em qualquer lugar do código, você importa normalmente:
 *
 *   import Button from "./components/Button";
 *
 * E o Metro resolve sozinho qual arquivo carregar, dependendo de qual
 * plataforma está buildando o app naquele momento. Isso é mais usado
 * em bibliotecas/design systems grandes — pra ajustes pequenos,
 * Platform.OS / Platform.select() (como nos exemplos acima) já resolve
 * na maioria dos casos do dia a dia.
 * =============================================================================
 */