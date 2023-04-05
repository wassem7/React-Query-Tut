import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

const onSuccess = (data) => {
  console.log('Success side effect !', data);
};
const onError = (error) => {
  console.log('Error side effect !', error);
};
export const RQSuperHeroesPage = () => {
  const {
    isLoading,
    data,
    isError,
    error,
    isFetching,
    refetch,
  } = useSuperHeroesData(onSuccess, onError);
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
