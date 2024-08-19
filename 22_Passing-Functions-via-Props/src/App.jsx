import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

// STATE -> useState

function App() {

  // let foodItems = ["Dal", "Green Leafy vegetables", "Roti", "Salad", "Milk" , "Ghee" , "Chana"];
  // as we have used useState we wont use the above array for now

  // HOOKS

  // when you use useState it returns an array which has 2 elements
  // 1st element is the current value
  //  2nd one is the method/ function through which you can edit

  //      let textStateArr = useState("Food Item Entered By User");

  // let textStateVal = textStateArr[0];
  // let setTextState = textStateArr[1];

  // we need to give the current value here as textToShow

  //       let textToShow = textStateArr[0];

  // And the initial value can be given ny passing the value in the use state 
  // example -> let textStateArr = useState("Food Item Entered By User");

  //       let setTextState = textStateArr[1];



  // small destructured syntax of the above code
  //       let [ textToShow ,setTextState ] = useState("Food Item Entered By User");




  // Making foodItem as useState
  let [ textToShow ,setTextState ] = useState("");

  //write the initial array inside the use state
  // here the current value will be stored in foodItems
  // and the set method will be in setFoodItems
  // let [foodItems , setFoodItems] = useState(["Dal", "Green Leafy vegetables", "Roti"]);
  // to make the app better we will keep the array of helathy products as null (we can keep it as shown in upper line code too)
  let [foodItems , setFoodItems] = useState([]);



  // we have used [ ] here as we have array here 
  // and the above textToShow and setTextState are destructured in the [ ]

  // just for checking we will use the console.log
  // console.log(`Current Value of textState:${textToShow}`)




  // Passing Functions via Props
  // let textToShow = "Food Item Entered By User";
  // see the changed code above

  /*
  // old code for onChange
  const handelOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value) ;
    // setText value from the above we have to set here that will be the text entered by the user
  }
  */

  // new code for onKeyDown

  const onKeyDown = (event) => {
    // console.log(event.target.value);
    if(event.key === "Enter"){ //remember in Enter E should be capital

      let newFoodItem = event.target.value;
      // after entering if you want to make input blank we can use the below code for it 
      event.target.value = "";
      // new items we have use spread operator as ... as we need previous values(current values in array have been added here ) and newFoodItem we have written here as we need to add that 
      let newItems = [...foodItems, newFoodItem]
      //after doing this we need to send newitems in setFoodItems (newItems ko setFoodItems main bhej do)
      setFoodItems(newItems)
      console.log("Food value entered is " + newFoodItem);

    }
    // setTextState(event.target.value) ;
    // now we arent using setTextState as we are using newFoodItem so we commented it
    
  }
  


  return (

    // Here insted of Fragments we have used Container

    <>
    <Container>

    <h1 className="foodHeading">Healthy Food</h1>


    {/* Handling Events */}
    {/* Earlier code for onClick*/}
    {/* <FoodInput handelOnChange={handelOnChange}></FoodInput> */}
    
    {/* New code  for onKeyDown*/}
    <FoodInput handelKeyDown={onKeyDown}></FoodInput>

    {/* Error Message */}
    {/* {foodItems.length === 0 && <h3>No food items to display</h3>} */}
    <ErrorMessage items={foodItems} ></ErrorMessage>

    {/* Passing Functions via Props */}
    <p>{textToShow}</p>

    <FoodItems items={foodItems}></FoodItems>

    
    </Container>

    {/* Another Container */}

    <Container>
    <p>Above is the list of healthy foods that are good for your heakth and well being</p>
    </Container>

    </>
    
  );
}

export default App;