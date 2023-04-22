import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 3,
    marginHorizontal: 12,
    backgroundColor: "green",
  },
  itemText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default List;
