import styles from "./Container.module.css";

const Container = (props) => {

    return (

        <>
        <div className={styles.container}>
            {props.children}
        </div>
        </>
    )

        // DESTRUCTURING

/*
const Container = ({children}) => {

    return (
        <>
        <div className={styles.container}>
            {children}
        </div>
        </>
        
    )

*/

// we have direct prop as children ...you can also make you own prop and export it in app.jsx 
// here we have our own children prop and we no need to export / import by our own in app.jsx
        


    
};

export default Container;

// You can wrap anything ...and this child rpop wont check anything you put ...its only work is to take and make wrap inside it
