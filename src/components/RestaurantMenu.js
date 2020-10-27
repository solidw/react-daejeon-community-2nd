import React from 'react';

import './RestaurantMenu.css';
import { getPriceWithComma } from '../utils';

function RestaurantMenu({ menu }) {
  return (
    <div className="menu-div">
      {menu.map((food) => (
        <div className="food" key={food.menuId}>
          <p>
            {food.food}
          </p>
          <p>
            {getPriceWithComma(food.price)}
          </p>
        </div>
      ))}
      <div />
    </div>
  );
}

export default RestaurantMenu;
