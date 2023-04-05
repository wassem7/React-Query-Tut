import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends');
};
const ParellelQueries = () => {
  const { data } = useQuery('super-heroes', fetchSuperHeroes);
  const { data: friends } = useQuery('friends', fetchFriends);
  return (
    <>
      <div>ParellelQueries</div>
      {data?.data?.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};

export default ParellelQueries;
