

// import styles from '../App.module.css'
// never use this as this is for the app.jsx css module we need to make a seperate Diaplay.module.css file for this
// use the below code

import styles from './Display.module.css'


const Display = ({displayValue}) => {
  return (
    <>
      <input className={styles.display} type="text" value={displayValue} readOnly /> 
      {/* we have used read only as we dont want any user to type in the display */}
      
    </>
  );
};

export default Display;
