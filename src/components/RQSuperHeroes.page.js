import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};
export const RQSuperHeroesPage = () => {
  const {
    isLoading,
    data,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery('super-heroes', fetchSuperHeroes, {
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    enabled: false,
  });
  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) return <h2>Is loading</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      {' '}
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Refetch data</button>
      {data?.data?.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
