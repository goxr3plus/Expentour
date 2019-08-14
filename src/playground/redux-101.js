import { createStore } from "redux";

//Store state
let initialState = { miaou: "maou", count: 0 };

//Reducer
//. Reducers are pure function , new state = old state + action
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.incrementBy };
    case "DECREMENT":
      return { ...state, count: state.count - action.decrementBy };
    case "SET":
      return { ...state, count: action.count };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

//STORE-create store
const store = createStore(countReducer);

//SUBSCRIBE-Get notified about state changes
const unsubscribe = store.subscribe(() => {
  console.log("Mama :", store.getState());
});

//unsubscribe();
//-----------------------------Action generators - functions that return action objects------------------------
const incrementCount = ({ incrementBy = 1 }) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = -1 }) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({ type: "RESET" });
const setCount = ({ count = 0 }) => ({ type: "SET", count });

// --------------------------------DISPATCH---------------------------------------
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: -33 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 233 }));
