import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Home.css';
import RestaurantTable from '../components/RestaurantTable';
import RandomPicker from '../components/RandomPicker';
import Loading from '../components/Loading';
import FetchButton from '../components/FetchButton';

function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedData = await axios.get('http://localhost:4000/restaurant');
      setRestaurantData(fetchedData.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (error) {
    return (
      <div>
        <p>
          Error
        </p>
        <FetchButton callback={fetchData} />
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
