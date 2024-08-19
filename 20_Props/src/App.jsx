import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  let foodItems = ["Dal", "Green Leafy vegetables", "Roti", "Salad", "Milk" , "Ghee"];

  return (
    <>

    <h1 className="food-heading">Healthy Food</h1>

    {/* Error Message */}
    {/* {foodItems.length === 0 && <h3>No food items to display</h3>} */}
    <ErrorMessage items={foodItems} ></ErrorMessage>

    <FoodItems items={foodItems}></FoodItems>

    
    </>
    
  );
}

export default App;
