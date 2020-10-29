import React, { useRef, useState } from 'react';

import './RandomPicker.css';
import { getRandomInteger } from '../utils';
import RestaurantRow from './RestaurantRow';
import useToggle from '../hooks/useToggle';
import Loading from './Loading';

const DELAY = 2000;

function RandomPicker({ data }) {
  const [pick, setPick] = useState(-1);
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
    }, DELAY);
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
      ) : pick === -1 ? (
        <p>Press Pick Button</p>
      ) : (
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
