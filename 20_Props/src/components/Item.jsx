import styles from "./Item.module.css"

const Item = (props)=>{
    return (
    // <li key={props.foodItem} className="list-group-item tk-item">  
    <li key={props.foodItem} className={`${styles["tk-item"]} list-group-item`}>  
    <span className={`${styles["tk-span"]}`}> 
    {props.foodItem} 
    </span>
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
}

*/

// what we did here is we removed the code -> let {foodItem} = props;
// and we direct wrote foodItem in the ( )  --> ({foodItem}) ..which was earlier (props)
//as props is only name you can give any name...so clean and make the code more simple you directly did destructuing ..as anyways jo sari cheeze ek object main dal ke dene wala tha and here you did directly destructuring






// FOR CSS MODULE YOU CAN USE THE FOLLOWING TYPES

// 1 )   <div className={`${styles["itemsContainer"]}`}>


// 2 )   <div className={styles.itemsContainer}>
