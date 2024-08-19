import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  
  // return (
  //   <div>
  //     <h1>Healthy Food</h1>
  //     <ul class="list-group">
  //       <li class="list-group-item">An item</li>
  //       <li class="list-group-item">A second item</li>
  //       <li class="list-group-item">A third item</li>
  //       <li class="list-group-item">A fourth item</li>
  //       <li class="list-group-item">And a fifth one</li>
  //     </ul>
  //   </div>
  // );

  // retuen can only hold one tag that is if we use <div> we need to write our hold code in <div></div> tag and not use any other than other than this below div...
  // to use many tags we need to use <> -> this is called as fragments 
  // one extra div can be avoided by using fragment <React.Fragment>

  
  // return (
  //   <React.Fragment>
    
  // <h1>Healthy Food</h1>
  //   <ul class="list-group">
  //     <li class="list-group-item">Dal</li>
  //     <li class="list-group-item">Green Leafy Vegetables</li>
  //     <li class="list-group-item">Roti</li>
  //     <li class="list-group-item">Salad</li>
  //      <li class="list-group-item">Milk</li>
  //   </ul>
  
  //   </React.Fragment>
  // );

  
  // let foodItems = ["Dal", "Green Leafy vegetables", "Roti", "Salad", "Milk" , "Ghee"];

  let foodItems = [];

  // CONDITIONAL
  // if(foodItems.length === 0 ){
  //   return <h3>No food items to display</h3>  // if array is empty then we show a message
  // }

  // We canstore the message here too (Another example)
  let emptyMessage = foodItems.length === 0 ? <h3>No food items to display</h3> : null;
  
  return ( 
  
  <>

  <h1>Healthy Food</h1>

    {/* conditional rendering */}

    {foodItems.length === 0 ? <h3>No food items to display</h3> : null}

    {emptyMessage}

    {/* conditional truthy falsy */}
    {foodItems.length === 0 && <h3>No food items to display</h3>}

    <ul class="list-group">
      {/* <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
       <li class="list-group-item">And a fifth one</li> */}

    {foodItems.map(item => <li key={item} class="list-group-item"> {item} </li>)}
    
    </ul>
  
  </>
  );

  // what happens here is when we use map we get the wholearray in single itms and that we store in item 
  // now in this item what we want to do that we should be written after the => (array) that is here we need to it in list so we have taken the list 
  //  and in taht list we want to store the items that we received and stored in item through map 




}

export default App;

// ek cheez ko dusre cheez main convert karna hai ...ek array ko dusre array main convert karn hai then use map..and in map we define what we want to give to the individual item
// example gehu -> flour -> chapati

// in the above (code) exmple we converted food items into list items

// in modern javascript every item should have its kwy so we need to give key ={item}



