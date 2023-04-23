import { Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusSeven } from "../util/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expenses) => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusSeven(today, 7);

    return expenses.date >= dateSevenDaysAgo;
  });
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="No expenses found from last 7 days!"
    />
  );
}

export default RecentExpenses;
