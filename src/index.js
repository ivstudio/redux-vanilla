import * as Redux from "redux";

//simple reducer
function todoApp(todos = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, action.payload];
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

//create store pass to reducer
const store = Redux.createStore(todoApp);

//Add todo action creator
let previousId = 0;
function addTodo(text) {
  //action
  return {
    type: "ADD_TODO",
    payload: {
      text,
      id: previousId++
    }
  };
}

//Delete todo action creator
function deleteTodo(id) {
  //action
  return {
    type: "DELETE_TODO",
    id
  };
}

//dispatch actions to store
store.dispatch(addTodo("Call mom"));
store.dispatch(addTodo("Go to market"));
store.dispatch(addTodo("Finish post"));

//get new state from store
console.log(store.getState());

//dispatch actions to store
store.dispatch(deleteTodo(2));
//get new state from store
console.log(store.getState());
