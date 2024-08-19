// import styles from '../App.module.css'
// import styles from '../App.module.css'
// never use this as this is for the app.jsx css module we need to make a seperate Buttons.module.css file for this
// use the below code

import styles from './ButtonsContainer.module.css'

const Buttons = () => {

  const buttonNames = ["C" , "1" , "2" , "+" , "3" , "4" , "-" , "5" , "6" , "*" , "7" , "8" , "/" , "=" , "9" , "0" , "."]
  return (
    <>
      <div className={styles.buttonsContainer}>
        
        {/* {buttonNames.map(item => <button className={styles.button}>C</button>)} */}
        
          {buttonNames.map((item) => {
          return <button className={styles.button}>{item}</button>
          })}

          {/* NOTE - in place of c we need to write item as we have mentioned it in map that we are getting all the elements in the list in the varibale item and you can take the variable name anything of your choice but remember to use the same name after where there is C ..That is where we need to use the elements in the array */}
        
        {/* <button className={styles.button}>1</button>
        <button className={styles.button}>4</button> */}

      </div>
    </>
  );
};

export default Buttons;
