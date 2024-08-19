

// import styles from '../App.module.css'
// never use this as this is for the app.jsx css module we need to make a seperate Diaplay.module.css file for this
// use the below code

import styles from './Display.module.css'


const Display = () => {
  return (
    <>
      <input className={styles.display} type="text" />
      
    </>
  );
};

export default Display;
