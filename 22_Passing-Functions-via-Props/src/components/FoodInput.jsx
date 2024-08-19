// Onchange event

import styles from './FoodInput.module.css'

// as on the botton page we have chose to use onkey down we need to change the props in the below line
//  from handelOnChange we will change it to -> handelKeyDown

//earlier code
// const FoodInput = ({ handelOnChange }) => {

// new code -> below is the same as above but with onKeyDown instead of onChange

const FoodInput = ({ handelKeyDown }) => {


        return (
    
        <input 
        className={styles.FoodInput} 
        type="text" 
        placeholder='Enter Food Item Here'
        
        // onChange={(event) =>{

            // console.log(event)

            //rather than pura event we can do the following

        // console.log(event.target.value);}}/>

            // i am intsted at what input did the user put and event.target.values gives it
            // if gave input as ice it will show below as you enter
            // 1) i
            // 2) ic
            // 3) ice
            //it basically gives current value you give in keyboard by the user


            // or
            // below used to pass from child to parent (props ke ulta)
            // onChange={handelOnChange}

            // now here insted on onChange we need onKeyDown so that when we enter in the input we get to store the value (jab bhi koi key dabe to bata dena)
            // so we will use
            onKeyDown={handelKeyDown}

            />
        );


    }
        export default FoodInput;



/*
        
    // if you want to use it as a method ...so the following

    const handelOnChange = (event) => {

        console.log(event.target.value)
        // i am intsted at what input did the user put and event.target.values gives it
        // if gave input as ice it will show below as you enter
        // 1) i
        // 2) ic
        // 3) ice
        //it basically gives current value you give in keyboard by the user

    }

        // doing the same thing but using method
        
        return <input className={styles.FoodInput} type="text" placeholder='Enter Food Item Here'
        onChange={handelOnChange} />

        // idhar wapas event dene ki jarurat nahias we are already taking it in the event
};
*/
   
        






