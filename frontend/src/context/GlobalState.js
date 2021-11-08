import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  transactions: [],
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function viewTransactions() {
    axios
      .get("/api/transaction/")
      .then((res) => {
        console.log("Success: ", res);
        const response = res.data;
        dispatch({
          type: "get_transaction",
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch({
          type: "error_transaction",
          payload: err.response,
        });
      });
  }

  function deleteTransaction(id) {
    axios
      .delete(`/api/transaction/${id}`)
      .then((res) => {
        console.log("Response: ", res);
        dispatch({
          type: "delete_transaction",
          payload: id,
        });
      })
      .catch((err) => {
        dispatch({
          type: "error_transaction",
          payload: err.response,
        });
      });
  }

  function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("/api/transaction", transaction, config)
      .then((res) => {
        const r = res.data;
        dispatch({
          type: "add_transaction",
          payload: r.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "error_transaction",
          payload: err.response,
        });
      });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        viewTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
