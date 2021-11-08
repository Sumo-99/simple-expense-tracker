import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onTransact = (type) => {
    // e.preventDefault(
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: type === "sub" ? -1 * amount : +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
        </label>
        <input
          type="number"
          // value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>
      <div className="btn-bar">
        <button
          onClick={() => {
            onTransact("sub");
          }}
          className="btn"
        >
          Add expense
        </button>
        <button
          onClick={() => {
            onTransact("add");
          }}
          className="btn"
        >
          Add income
        </button>
      </div>
    </>
  );
};
