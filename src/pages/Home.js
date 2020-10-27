import React from 'react';
import axios from 'axios';

import useAsync from '../hooks/useAsync';
import './Home.css';
import RestaurantTable from '../components/RestaurantTable';

async function getRestaurant() {
  const response = await axios.get('http://localhost:4000');
  return response.data;
}

function Home() {
  const {
    loading, data, error, refetch,
  } = useAsync(getRestaurant, [], false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  const { data: restaurantData } = data;

  return (
    <>
      <RestaurantTable restaurants={restaurantData} />
    </>
  );
}

export default Home;
