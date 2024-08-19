import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {

  let foodItems = ["Dal", "Green Leafy vegetables", "Roti", "Salad", "Milk" , "Ghee" , "Chana"];


  return (

    // Here insted of Fragments we have used Container

    <>
    <Container>

    <h1 className="foodHeading">Healthy Food</h1>

    {/* Error Message */}
    {/* {foodItems.length === 0 && <h3>No food items to display</h3>} */}
    <ErrorMessage items={foodItems} ></ErrorMessage>

    {/* Handling Events */}
    <FoodInput></FoodInput>

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
