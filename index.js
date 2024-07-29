const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";

// buyCake is a "creator action".
// the object return is a "action".
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
};

//reducer
// (previousState,action) => newState
const initialState = {
  numOfCake: 25,
};
const reducer = (state = initialState, action) => {
  if (action.type === BUY_CAKE) {
    return { ...state, numOfCake: state.numOfCake - 1 };
  } else {
    return state;
  }
};

const store = createStore(reducer);
// console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
