import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from 'react';


function App() {

  let [calVal,setCalVal] = useState("")
  // the initail value will be " " as the calculator display should be blank at first

  // const onButtonClick = (e) =>console.log(e)
  // we have that here e as as aevent to get the which button we have clicked
  // to fint we need to go to the console go to the taget and find what is the correct element is showing
  // but what we are gonna do is differect

  //   const onButtonClick = (item) =>console.log(item)
  // we have taken here item as event as we are getting item in buttonContainer where we have stored button in item
  // we can give any name here it is not compulsory to give same name as item ...buttonName aslo works or any other of your choice

  const onButtonClick = (buttonText) =>{
    if(buttonText==="C"){
      setCalVal("")
      //so when someone clck on c the final change setCalVal should be called with " " blank as an input
    }
    else if (buttonText==="="){
      //eval ko ap string pass kar sakte hai..and we have string here as input box (display)...and uske andar jo bhi mathematical equation hoga eval usko evaluate karega result dedega
      const result = eval(calVal);
      setCalVal(result)
      // and we need to store in setCalVal
    }
    else{
      const newDisplayValue = calVal + buttonText
      // this else does the work as excepy c and = if any other key comes it will display it in the display box and the buttons are stored in newDisplayValue which has calVal (the initial value) + the buttonText (jo bhi naya buttontext aya hai vo is stored in buttonText)
      // eg. it in that display area 46 is already there and you now click 7 so 46 + 7 this will give 467 as it is being added in the string format
      // and this newDisplayValue we have got we need to store in the final value that is setCalValu...so we will store that in it
      setCalVal(newDisplayValue);
    }
  }



  return (
    <>
      <div className={styles.calculator}>

        <Display displayValue={calVal}></Display>

        {/* <ButtonsContainer onButtonClick={()=>console.log("Button Clicked")}></ButtonsContainer> */}
        {/* we have included the on click in the upper code at the start */}
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>

        

          
      </div>
    </>
  )
}

export default App
