import React from 'react';
import axios from 'axios';

import useAsync from '../hooks/useAsync';
import './Home.css';
import RestaurantTable from '../components/RestaurantTable';
import RandomPicker from '../components/RandomPicker';
import Loading from '../components/Loading';
import FetchButton from '../components/FetchButton';

async function getRestaurant() {
  const response = await axios.get('http://localhost:4000/restaurant');
  return response.data;
}

function Home() {
  const {
    loading, data, error, refetch,
  } = useAsync(getRestaurant, [], false);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        <p>
          Error
        </p>
        <FetchButton callback={refetch} />
      </div>
    );
  }

  if (!data) return <div>No data</div>;

  const { data: restaurantData } = data;

  return (
    <div className="home-div">
      <RestaurantTable restaurants={restaurantData} />
      <RandomPicker data={restaurantData} />
    </div>
  );
}

export default Home;
