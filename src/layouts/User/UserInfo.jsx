import { useState } from "react";
import User from "../../components/User/User";
function UserInfo({listIncome, listExpense}) {
  return (
    <div className="user">
      <User listIncome={listIncome} listExpense={listExpense}></User>
    </div>
  );
}

export default UserInfo;
