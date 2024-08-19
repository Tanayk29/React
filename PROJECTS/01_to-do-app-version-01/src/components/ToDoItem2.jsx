// ROW -3
function ToDoItem2() {

    let todoName = "Go To College";
    let todoDate = "04/10/2023";
  return (
    <div class="container">

      <div class="row tk-row">

        {/* <div class="col-6">Buy Milk</div> */}

        <div class="col-6">{todoName}</div>


        {/* <div class="col-4">4/10/2024</div> */}

        <div class="col-4">{todoDate}</div>

        
        <div class="col-2">
          <button type="button" class="btn btn-danger tk-button">
            Delete
          </button>
        </div>
        
      </div>
    </div>
);
    
}

export default ToDoItem2;
