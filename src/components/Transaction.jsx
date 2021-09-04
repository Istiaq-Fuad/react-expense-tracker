import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">X</button>
    </li>
  );
}

export default Transaction;
