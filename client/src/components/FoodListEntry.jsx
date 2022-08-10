import React from 'react';

var FoodListEntry = (props) => (
 <div>
   <div className="foodListEntry">{props.food.name}</div>
 </div>

);



export default FoodListEntry;