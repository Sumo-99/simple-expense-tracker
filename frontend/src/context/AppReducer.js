export default (state, action) => {
  switch (action.type) {
    case "get_transaction":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "delete_transaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "add_transaction":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "error_transaction":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
