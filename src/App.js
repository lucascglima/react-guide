import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance for the year 2020",
      amount: 200,
      date: new Date(2020, 11, 17),
    },
  ];
  return (
    <div>
      <h2> My React App</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}
export default App;
