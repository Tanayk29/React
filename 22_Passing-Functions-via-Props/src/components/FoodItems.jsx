import { useState } from "react";
import Item from "./Item";

const FoodItems = ({items}) =>{

    let [activeItems , setActiveItems] = useState([]);

    let onBuyButton = (item ,event) =>{
        let newItems = [...activeItems,item];
        setActiveItems(newItems);
    };

    // let foodItems = ["Dal", "Green Leafy vegetables", "Roti", "Salad", "Milk" , "Ghee"];
    // we used direct destrting and used ({items}) above as props and now we dont need to use the array fooItems again and again as it will be only written once in App.jsx
    
    return (

    <ul className="list-group">
        
    {items.map((item) => (
        <Item 
            key={item} 
            foodItem={item}
            // if someone clicks on buy button than the following should be there
            bought={activeItems.includes(item)}
            // handleBuyButton={()=>console.log(`${item} bought`)}
            handleBuyButton={(event)=>onBuyButton(item,event)}
            ></Item>
            ))}
    </ul>

    );
};

export default FoodItems;

// we can see here that teh item access is there here ...but we have to get this to the item component
// so we need to need to pass it through the attribute 
// lets say we need to pass "item" to Item.jsx component
// we need to first import item compoent in this file and then
// we need to pass it through the attribute like -> <Item></item>  --> so we need to do -->   <item FoodItem={Item}></item>      as it is stored in foodItem and {} is used to dynamicall pass it                         {}-> this is called as argument
// we have an argument item and on that basis we need to work -> jaise apan method main argument / parameter pass karate hai waise...we have passed foodItem as an argument

// also for the item we need to give the key -->   key = {item}