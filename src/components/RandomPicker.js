import React, { useRef, useState } from 'react';

import './RandomPicker.css';
import { getRandomInteger } from '../utils';
import RestaurantRow from './RestaurantRow';
import useToggle from '../hooks/useToggle';
import Loading from './Loading';

function RandomPicker({ data }) {
  const [pick, setPick] = useState(0);
  const [isLoading, toggleLoading] = useToggle(false);
  const timeoutId = useRef();

  const onClickRandomButton = () => {
    toggleLoading(true);
    setPick(getRandomInteger(data.length));

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      toggleLoading(false);
    }, 2000);
  };

  return (
    <div className="picker-div">
      <button className="pick-button" onClick={onClickRandomButton} type="button">
        Pick!
      </button>
      {isLoading ? (
        <>
          <Loading />
          <p>Loading ...</p>
        </>
      )
        : (
          <table>
            <tbody>
              <RestaurantRow id={data[pick].id} name={data[pick].name} menu={data[pick].menu} />
            </tbody>
          </table>
        )}
    </div>
  );
}

export default RandomPicker;
