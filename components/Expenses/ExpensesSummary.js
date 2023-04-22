import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.color.lightGray,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 16,
    color: GlobalStyles.color.lightTeal,
    fontWeight: "bold",
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.color.lightTeal,
  },
});

export default ExpensesSummary;
