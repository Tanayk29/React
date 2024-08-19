import Hello from "./Hello"
import KgButton from "./KgButton"
import Random from "./Random"


// This is a component
// component is like an fucntion first we need to define the finction

function App (){

  return <div>

  {/* This is called as functional based component */}

  <h1> Hey This Is React </h1>

  {/* <button>Subscribe</button> */}

  <KgButton></KgButton>
  {/* importing */}
  

  {/* This is jsx code -> gets converted to Javascript */}

  {/* These are stateless -> they dont have properties */}

  <Hello></Hello>


  <Random></Random>

  <Random></Random>
  <Random></Random>
  <Random></Random>

  
  </div>

}

export default App
// this is compulsory
// we need to use this as if we want to use this component somewhere else we need to use this 


// we can directly import css in react
// to import css just import the css file using import nothing to use link tag and etc just like html