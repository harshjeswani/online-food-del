import React, { useContext } from 'react';
import './FoodDisplay.css';
import { storeContext } from '../../context/storeContext'; // adjust the path if needed
import FoodItem from '../FoodItem/FoodItem'; // adjust path to your FoodItem component
import { food_list } from '../../assets/assets';

function FoodDisplay({ category }) {
  // const { food_list } = useContext(storeContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className='food-display-list'>
        {food_list
          
          .map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null; // optional: skip items that don't match category
          })
          
}
      </div>
    </div>
  );
}

export default FoodDisplay;
