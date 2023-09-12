import { useState } from "react";
import AddAction from "../../components/AddAction/AddIncome";
import "../../style/Home.css";
import AddIncome from "../../components/AddAction/AddIncome";
import AddExpense from "../../components/AddAction/AddExpense";
function ActionLayout() {
  const [actionType, setActionType] = useState(true);
  const chooseExpense = (e) => {
    e.preventDefault();
    setActionType((current) => !current);
    const active = document.querySelector(".tab__active");
    active.classList.remove("tab__active");
    e.target.classList.add("tab__active");
  };

  return (
    <div className="actions">
      <div className="action__type">
        <button onClick={chooseExpense} className="action__tab ">
          Expense
        </button>
        <button onClick={chooseExpense} className="action__tab tab__active">
          Income
        </button>
      </div>
      {actionType ? (
        <AddIncome type={"income"} />
      ) : (
        <AddExpense type={"expense"} />
      )}
    </div>
  );
}

export default ActionLayout;
