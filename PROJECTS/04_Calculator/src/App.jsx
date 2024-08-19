import styles from './App.module.css'
import Display from './components/Display'
import Buttons from "./components/ButtonsContainer";


function App() {
  
  return (
    <>
      <div className={styles.calculator}>

        <Display></Display>

        <Buttons></Buttons>

        

          
      </div>
    </>
  )
}

export default App
