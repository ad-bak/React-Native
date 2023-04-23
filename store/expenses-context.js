import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Toilet Paper",
    amount: 3.99,
    date: new Date(2023, 4, 20),
  },
  {
    id: "e2",
    description: "Pants",
    amount: 33.99,
    date: new Date(2023, 4, 20),
  },
  {
    id: "e3",
    description: "Fruits",
    amount: 13.99,
    date: new Date(2023, 4, 21),
  },
  {
    id: "e4",
    description: "Book",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e5",
    description: "Sweater",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e6",
    description: "Sneakers",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e7",
    description: "Juice",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e8",
    description: "Cigarettes",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e9",
    description: "Cookies",
    amount: 5.99,
    date: new Date(2023, 1, 1),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().getTime().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE_EXPENSE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {
        ...updatableExpense,
        ...action.payload.expenseData,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD_EXPENSE", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE_EXPENSE", payload: { id, expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
