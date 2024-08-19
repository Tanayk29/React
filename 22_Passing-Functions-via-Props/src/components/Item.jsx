// THIS ALSO INCLUDES EVENT HANDLING
import styles from "./Item.module.css"

const Item = (props)=>{

    // we can also make onclick as an method and use it just by adding code to a variable and using that variable instead of the writing the whole code
    //also take the prop.fooditem / fooditem (prop that you are importing) take it as an argument (this is the good practise)
    const handleBuyButton = (fooditem) => {
        console.log(`${props.foodItem} Being Bought `)
    }
    return (
    // <li key={props.foodItem} className="list-group-item tk-item">  
    <li key={props.foodItem} className={`${styles["tk-item"]} list-group-item ${props.bought && "active "}`}>  
    <span className={`${styles["tk-span"]}`}> 
    {props.foodItem} 
    </span>

    <button className={`${styles.button} btn btn-primary` }
    // js ke beech javascript ka code likhna hai toh we need to us this{}
    // onClick={()=> console.log(`${props.foodItem}Item Being Bought `)}>Add to Cart</button>        
    
    //another way to use onlick by method we have coded it above as just used the variable name here 

    // onClick={()=> handleBuyButton(props.foodItem)}>
    //     Add to Cart
    // </button>   

    // if we dont want to use the above method we can directly pass the method reference
    // in the above we were using anonymous method so that it wont call immediately
    // but now you can directly give the reference (here - handleBuyButton) ...this is function reference
    // onClick={handleBuyButton}
    
    // also you can use event 
    // onClick={(event) => handleBuyButton}>
     onClick={handleBuyButton}>
        Add to Cart
    </button>   

    </li>
    )
}

export default Item;

// to catch it from FoodItems->item ...we need to cath it here ...we need to use props in ( )...thats a generical that whenever we pass an argument we need to use props
// and where there is item in the code we need to change it to props.FoodItems ...as we have defines argument as FoodItems

// the key=props.foodItem can be skipped here as we have already passed the key in the foodItem.jsx 

// also we can se destructuring that is 
//  insted of writing props we can wrte 



// code for destructuing and removing key item 
/*

const Item = (props)=>{
    return (
    let {foodItem} = props;
    <li key={props.foodItem} className="list-group-item">  
    {props.foodItem} 
    </li>
    )
}

*/


// so here we can just write foodItem insted of props.fooditem and this is called as destructuing

// also instead of writing props in the ( )  --> like this (props)
// what we can do is the following


// code for destructuing 
/*

const Item = ({foodItems})=>{
    return (
    
    <li key={props.foodItem} className="list-group-item">  
    {props.foodItem} 
    </li>
    )

    <button className={`${styles.button} btn btn-primary` }
    // js ke beech javascript ka code likhna hai toh we need to us this{}
    onClick={()=> console.log(`${foodItem}Item Being Bought `)}>Add to Cart</button>        
    </li>
}

*/

// what we did here is we removed the code -> let {foodItem} = props;
// and we direct wrote foodItem in the ( )  --> ({foodItem}) ..which was earlier (props)
//as props is only name you can give any name...so clean and make the code more simple you directly did destructuing ..as anyways jo sari cheeze ek object main dal ke dene wala tha and here you did directly destructuring






// FOR CSS MODULE YOU CAN USE THE FOLLOWING TYPES

// 1 )   <div className={`${styles["itemsContainer"]}`}>


// 2 )   <div className={styles.itemsContainer}>















/*

const Item = ({fooditems})=>{

    const handleBuyButton = (event) => {
        console.log(event);
        console.log(`${foodItem} Being Bought `)
    }
    return (
    <li className={`${styles["tk-item"]} list-group-item`}>  
    <span className={`${styles["tk-span"]}`}> 
    {foodItem} 
    </span>

    <button 
    className={`${styles.button} btn btn-primary` }
    onClick={(event) => handleBuyButton(event)}>
    Add to Cart
    </button>   

    </li>
    )
}

*/