import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
// import ToDoItem1 from "./components/ToDoItem1"
// import ToDoItem2 from "./components/ToDoItem2"
// import ToDoItem from "./components/ToDoItem"
import "./App.css";
import ToDoItems from "./components/ToDoItems";
function App() {

  const todoItems = [
    {
    name: "Buy Milk",
    dueDate: "04/10/2023"
    },
    {
      name: "Go To College",
      dueDate: "04/10/2023"
    },
    {
      name: "Coding Practice",
      dueDate: "04/10/2023"
    }
  ]

  return <center className="todo-container">
    
    {/* <h1>TO-DO APP</h1> */}
    <AppName></AppName>
    {/* <AppName /> */}

  

    {/* Row -1 */}
    <AddToDo></AddToDo>

    {/* Row-2 And Row-3  (ToDoItems) */}
    <ToDoItems todoItems={todoItems}></ToDoItems>
  
</center>
}

export default App
