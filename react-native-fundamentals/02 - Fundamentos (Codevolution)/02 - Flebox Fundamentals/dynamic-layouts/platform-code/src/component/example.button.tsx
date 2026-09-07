import { View, Text } from "react-native";
import Button from "@/component/button";

// -----------------------------------------------------------------------
// Repare: o import é EXATAMENTE igual, não importa se vai rodar no
// iOS, Android ou Web. Você nem escreve ".ios" ou ".android" aqui —
// o Metro resolve isso sozinho na hora de empacotar o app pra cada
// plataforma. É como se cada plataforma "enxergasse" um arquivo
// components/Button.tsx diferente, sem você precisar fazer nada extra.
// -----------------------------------------------------------------------
export default function ExemploUsoButton() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text>Esse botão muda de visual sozinho dependendo da plataforma:</Text>
      <Button title="Toque aqui" onPress={() => console.log("Botão pressionado!")} />
    </View>
  );
}