import { createStore } from "redux";

//Store state
let initialState = { miaou: "maou", count: 3 };

//Create a store
const store = createStore((state = initialState, action) => {
  //Check action type
  switch (action.type) {
    case "INCREMENT":
      const incremenetBy =
        typeof action.increaseBy === "number" ? action.increaseBy : 1;
      return { ...state, count: state.count + incremenetBy };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return { ...state, count: state.count - decrementBy };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
});

//Get notified about state changes
const unsubscribe = store.subscribe(() => {
  console.log("Mama :", store.getState());
});

//Actions - an object that get sends to the store (ex: increment , decrement , reset etc...)
store.dispatch({
  type: "INCREMENT",
  increaseBy: 23324
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 235423423423423423423423423423
});

//Unsubscribe
unsubscribe();

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});

//Play around
