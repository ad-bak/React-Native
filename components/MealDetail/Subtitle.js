import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 14,
    borderRadius: 8,
    marginVertical: 4,
    borderBottomColor: "green",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
