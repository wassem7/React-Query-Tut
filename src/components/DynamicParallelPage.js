import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = (heroId) => {
  console.log(heroId);
  return axios.get(
    `http://localhost:4000/superheroes/${heroId}`
  );
};

const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );
  console.log(queryResults);
  return <div>DynamicParallelPage</div>;
};

export default DynamicParallelPage;
