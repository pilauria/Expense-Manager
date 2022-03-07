// Here we specify the app state changes in response to certain actions to our store (to our context). Change the state and sent it down to a component (creating a new state -with the spread operator- and send it down)

export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          /// ***
          transaction => transaction.id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

// *** send all the transaction except the one that was deleted
