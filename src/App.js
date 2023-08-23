import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expense = [
    {id: 'e1', title: 'Car insurance', amount: 500, date: new Date(2023, 8, 21)},
    {id: 'e2', title: 'Rent', amount: 800, date: new Date(2023, 8, 5)},
    {id: 'e3', title: 'Groceries', amount: 400, date: new Date(2023, 8, 13)},
    {id: 'e4', title: 'Subscriptions', amount: 200, date: new Date(2023, 8, 29)}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}/>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}/>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}/>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}/>
    </div>
  );
}

export default App;
