import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 3.99,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Pants",
    amount: 33.99,
    date: new Date(2021, 5, 24),
  },
  {
    id: "e3",
    title: "Fruits",
    amount: 13.99,
    date: new Date(2023, 3, 14),
  },
  {
    id: "e4",
    title: "Book",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e5",
    title: "Book",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e6",
    title: "Book",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e7",
    title: "Book",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e8",
    title: "Book",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e9",
    title: "Book",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 34,
    paddingTop: 34,
    paddingBottom: 0,
    backgroundColor: "white",
  },
});

export default ExpensesOutput;
