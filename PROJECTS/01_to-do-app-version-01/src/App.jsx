import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem1 from "./components/ToDoItem1"
import ToDoItem2 from "./components/ToDoItem2"
import "./App.css";
function App() {

  return <center className="todo-container">
    
    {/* <h1>TO-DO APP</h1> */}
  
    <AppName></AppName>

    {/* <AppName /> */}



    {/* Row -1 */}
    <AddToDo></AddToDo>


    <div className="items-container">

    {/* Row -2 */}
    <ToDoItem1></ToDoItem1>

    {/* ROW -3  */}
    <ToDoItem2></ToDoItem2>
    
    
    </div>
    
  
</center>
}

export default App
