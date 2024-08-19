// Onchange event

import styles from './FoodInput.module.css'

const FoodInput = () => {

        return (
    
        <input 
        className={styles.FoodInput} 
        type="text" 
        placeholder='Enter Food Item Here'
        onChange={(event) =>{

            // console.log(event)

            //rather than pura event we can do the following
            console.log(event.target.value);}}/>
            // i am intsted at what input did the user put and event.target.values gives it
            // if gave input as ice it will show below as you enter
            // 1) i
            // 2) ic
            // 3) ice
            //it basically gives current value you give in keyboard by the user
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
   
        






