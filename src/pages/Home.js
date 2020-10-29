import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Home.css';
import RestaurantTable from '../components/RestaurantTable';
import RandomPicker from '../components/RandomPicker';
import Loading from '../components/Loading';

function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get('http://localhost:4000/restaurant');
      console.log(fetchedData);
      setRestaurantData(fetchedData.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="home-div">
      <RestaurantTable restaurants={restaurantData} />
      <RandomPicker data={restaurantData} />
    </div>
  );
}

export default Home;
