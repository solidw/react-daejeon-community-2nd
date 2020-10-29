import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Home.css';
import RestaurantTable from '../components/RestaurantTable';
import RandomPicker from '../components/RandomPicker';
import Loading from '../components/Loading';

function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await axios.get('http://localhost:4000/restaurant');
        setRestaurantData(fetchedData.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error != null) {
    return (
      <div>
        error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div className="home-div">
      <RestaurantTable restaurants={restaurantData} />
      <RandomPicker data={restaurantData} />
    </div>
  );
}

export default Home;
