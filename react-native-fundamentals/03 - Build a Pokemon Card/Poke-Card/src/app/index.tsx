import { StyleSheet, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import YugiohCard from "../components/YugiohCard";

export default function Index() {

  const darkMagicianCard = {
    name: "Dark Magician",
    type: "Spellcaster",
    attribute: "DARK",
    level: 7,
    attack: 2500,
    defense: 2100,
    description: "The Ultimate Wizard in terms of Attack and Defense.",
    image: require("@/cards/monsters/Dark-Magician.png"),
  };

  const redEyesBlackDragonCard = {
    name: "Red-Eyes Black Dragon",
    type: "Dragon",
    attribute: "DARK",
    level: 7,
    attack: 2400,
    defense: 2000,
    description:
      "A ferocious dragon with a deadly attack. Its destructive power is feared by all.",
    image: require("@/cards/monsters/Red-Eyes-Dragon.png"),
  };

  const blueEyesWhiteDragonCard = {
    name: "Blue-Eyes White Dragon",
    type: "Dragon",
    attribute: "LIGHT",
    level: 12,
    attack: 4500,
    defense: 3000,
    description:
      "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
    image: require("@/cards/monsters/Ultimate-Blue-Eyes-WhiteDragon.png"),
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
        <YugiohCard {...darkMagicianCard} />
        <YugiohCard {...redEyesBlackDragonCard} />
        <YugiohCard {...blueEyesWhiteDragonCard} />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});