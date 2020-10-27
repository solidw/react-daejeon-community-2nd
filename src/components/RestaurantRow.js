import React from 'react';
import RestaurantMenu from './RestaurantMenu';
import './RestaurantRow.css';

function RestaurantRow({ id, name, menu }) {
  return (
    <tr>
      <td>
        {id}
      </td>
      <td className="row-name">
        {name}
      </td>
      <td>
        <RestaurantMenu menu={menu} />
      </td>
    </tr>
  );
}

export default RestaurantRow;
