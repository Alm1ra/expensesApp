import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

function ExpenseList(props) {
    const expenseArr = [];

    for(let i = 0; i < props.expense.length; i++) {
        expenseArr.push(<ExpenseItem key={props.expense[i].id} title={props.expense[i].title} amount={props.expense[i].amount} date={props.expense[i].date}/>)
    }
    return <div className="expenses">{expenseArr}</div>
}
export default ExpenseList;