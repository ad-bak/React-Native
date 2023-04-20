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
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
    maxWidth: "80%",
    minWidth: 300,
  },
});

export default Title;
