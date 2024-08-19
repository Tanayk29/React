import { useState } from "react";

// ROW 1 
function AddToDo({onNewItem}) {
  // we need to add the handleNewItem prop to the add button

  const [todoName,setTodoName] = useState();
  const [dueDate,setDueDate] = useState();
  //anding local states in adToDo component and store the values of both in onChange and when we need to add them in final add to the onNewItem

  const handleNameChange =(e) =>{
    // console.log(e.target.value)
    setTodoName(e.target.value);
  }

  const handleDateChange =(e) =>{
    setDueDate(e.target.value);
  }

  // we need to get the values target so that we can put in setToDOname and SetToDoDtae when onChnage is called in input
  // these upper methods just takes the input of what user has types using event.target.input and set in in setToDOname and SetToDoDate 
  // we need to store them in setToDOname and setToDoDate as they are the final values

  const handleAddButtonClicked=() =>{
    onNewItem(todoName, dueDate);
    setTodoName(" ");
    setDueDate(" ");
  }

  // now we need to send the values to the parent and make both inputs blank ..we need to use the upper code for this
  // we dont need any event here
  return (

      <div class="container text-center">
      <div class="row tk-row">

        <div class="col-6">
          <input type="text" placeholder="Enter To-Do Here" id="" onChange={handleNameChange} value={todoName}/> 
          {/* we need to add here handleNameChange and below handleDateChange to get to know what user has typed */}
          {/* methods just takes the input of what user has types using event.target.input and set in in setToDoname and SetToDoDate */}
        </div>

        <div class="col-4">
          <input type="date" id="" onChange={handleDateChange} value={dueDate}/>
        </div>

        <div class="col-2">
          <button type="button" class="btn btn-success tk-button" 
          // onClick={()=>onNewItem("a","b")}
          // need to make an anonymous function to get the value of both the inputs ...the above is teh example we took as input one a and other b as task and date resp
          onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>

      </div>

    </div>
    
  );
    

}

export default AddToDo;
