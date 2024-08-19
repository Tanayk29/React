// ROW -2
function ToDoItem1({ todoName, todoDate }) {
  // let todoName = "Buy Milk";
  // let todoDate = "04/10/2023";

  return (
    <div className="container ">
      <div className="row tk-row">
        {/* if we can chnage css here beside row but as its bootstrap we will be doing in app.css with our own propery .. check app.css -> tk-row */}

        {/* <div class="col-6">Buy Milk</div> */}

        <div className="col-6">{todoName}</div>

        {/* <div class="col-4">4/10/2024</div> */}

        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger tk-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;
