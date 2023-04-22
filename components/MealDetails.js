import { StyleSheet, Text, View } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyles,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyles]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyles]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyles]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 14,
    fontSize: 12,
  },
});
export default MealDetails;
