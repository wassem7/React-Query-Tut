import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};
export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } =
    useQuery('super-heroes', fetchSuperHeroes, {
      cacheTime: 5000,
    });
  console.log({ isLoading, isFetching });
  if (isLoading) return <h2>Is loading</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      {' '}
      <h2>React Query Super Heroes Page</h2>
      {data.data?.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
