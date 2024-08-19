import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css"
const ToDoItems = ({ todoItems }) => {
  return (
    <>
      <div className={`${styles["itemsContainer"]}`}>
        {/* As now we dont need harcoded values and it should take all the input so we need to use map  */}
        {todoItems.map(item => <ToDoItem todoName={item.name} todoDate={item.dueDate}></ToDoItem>)}

        {/* as we have given values of "Buy Milk" as name in array in App.jsx and as we are taking this through props here and using map we need to use item.name as we are taking that array into the variable item */}
        
        
        {/* Row -2 */}
        {/* <ToDoItem todoName={"Buy Milk"} todoDate={"04/10/2023"}></ToDoItem> */}

        {/* ROW -3  */}
        {/* <ToDoItem todoName={"Go To College"} todoDate={"04/10/2023"}></ToDoItem> */}

        {/* Row -2 */}
        {/* <ToDoItem1></ToDoItem1> */}
        {/* we have deleted this as we have created an combined todoItem coponent of 1 and 2 */}

        {/* ROW -3  */}
        {/* <ToDoItem2></ToDoItem2> */}
        {/* we have deleted this as we have created an combined todoItem coponent of 1 and 2 */}
      </div>
    </>
  );
};

export default ToDoItems;


// FOR CSS MODULE YOU CAN USE THE FOLLOWING TYPES

// 1 )   <div className={`${styles["itemsContainer"]}`}>


// 2 )   <div className={styles.itemsContainer}>