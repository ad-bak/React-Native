import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>Log</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 12,
  },
});

export default GameScreen;
