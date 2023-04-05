import { useQuery } from 'react-query';
import axios from 'axios';
const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    enabled: false,
    onSuccess,
    onError,
  });
};
