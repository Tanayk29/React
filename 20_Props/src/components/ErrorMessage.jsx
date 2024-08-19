const ErrorMessage = ({items}) =>{
    
    // let foodItems = ["Dal", "Green Leafy vegetables", "Roti", "Salad", "Milk" , "Ghee"];
    // we used direct destrting and used ({items}) above as props and now we dont need to use the array fooItems again and again as it will be only written once in App.jsx

    return (
    <>
        {/* {foodItems.length === 0 && <h3>No food items to display</h3>} */}
        
        {/* here insted of foodItems array we have writtem items as we have taken props from app.jsx and we have directly used it as an array */}
        
        {items.length === 0 && <h3>No food items to display</h3>}


    </>)
};

export default ErrorMessage;