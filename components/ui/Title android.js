import Colors from "../../constants/colors";
import { Platform, StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",

    borderWidth: Platform.select({ ios: 1, android: 0 }),
    padding: 12,
    maxWidth: "80%",
    minWidth: 300,
  },
});

export default Title;
