import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
const App = () => {
  const expense = [
    {id: 'e1', title: 'Car insurance', amount: 500, date: new Date(2023, 8, 21)},
    {id: 'e2', title: 'Rent', amount: 800, date: new Date(2023, 8, 5)},
    {id: 'e3', title: 'Groceries', amount: 400, date: new Date(2023, 8, 13)},
    {id: 'e4', title: 'Subscriptions', amount: 200, date: new Date(2023, 8, 29)}
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <ExpenseList expense={expense}></ExpenseList>
    </div>
  );
}
export default App;