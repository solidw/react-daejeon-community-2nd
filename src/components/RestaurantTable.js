import React from 'react';
import RestaurantRow from './RestaurantRow';

function RestaurantTable({ restaurants }) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>식당</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map(
          (restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              menu={restaurant.menu}
            />
          ),
        )}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
