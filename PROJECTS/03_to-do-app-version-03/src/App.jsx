import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
// import ToDoItem1 from "./components/ToDoItem1"
// import ToDoItem2 from "./components/ToDoItem2"
// import ToDoItem from "./components/ToDoItem"
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
function App() {

  const initialToDoItems = [
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

  const [todoItems , setToDoItems] =useState(initialToDoItems) ;

  const handleNewItem = (itemName,itemDueDate)=>{
    console.log(`New Item Added ${itemName} and Date ${itemDueDate}`)
  }
  // jab bhi new item bane toh item hummko itemName and itemDueDate value de dena
  // remember to give handle name before the method and while passing it (here in adddoto) give handler ..example like onChange,onClick..here we are using onNewItem..so whenerver there is onNewItem then handelNewItemShould be called

  return <center className="todo-container">
    
    {/* <h1>TO-DO APP</h1> */}
    <AppName></AppName>
    {/* <AppName /> */}

  

    {/* Row -1 */}
    <AddToDo onNewItem={handleNewItem}></AddToDo>

    {/* Row-2 And Row-3  (ToDoItems) */}
    <ToDoItems todoItems={todoItems}></ToDoItems>
  
</center>
}

export default App
