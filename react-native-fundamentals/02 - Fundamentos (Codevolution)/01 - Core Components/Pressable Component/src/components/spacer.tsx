import { View, DimensionValue } from "react-native";

// -----------------------------------------------------------------------
// SPACER — não é um "themed component", é um utilitário de espaçamento
// -----------------------------------------------------------------------
// No vídeo, o professor explica que, em vez de ficar estilizando cada
// elemento só pra dar um respiro (margin/padding) acima ou abaixo dele,
// ele prefere usar um componente <Spacer /> dedicado só pra isso — deixa
// o JSX mais legível, porque fica claro "aqui só tem espaço, não é
// estilo de verdade daquele elemento".
interface SpacerProps {
  width?: DimensionValue;
  height?: DimensionValue;
}

export default function Spacer({
  // Valor padrão de largura: 100% — ou seja, se você não passar "width",
  // o Spacer ocupa toda a largura do elemento pai automaticamente.
  width = "100%",
  // Valor padrão de altura: 40px — dá pra sobrescrever passando
  // <Spacer height={20} /> por exemplo, como o professor faz no vídeo
  // pra reduzir o espaço em algum lugar específico.
  height = 40
}: SpacerProps) {
  return (
    // O Spacer é só uma <View> vazia (sem filhos, "self-closing"),
    // cujo único propósito é ocupar espaço com o tamanho definido.
    // Ela não tem cor de fundo nem nada visível — é invisível, só empurra
    // o conteúdo ao redor dela.
    <View style={{ width, height }} />
  );
}