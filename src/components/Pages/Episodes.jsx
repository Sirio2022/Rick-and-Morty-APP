import { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import axios from 'axios';
import InputGroup from '../Filters/Category/InputGroup';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [id, setId] = useState(1);
  const [results, setResults] = useState([]);

  const { name, air_date, episode } = episodes;

  const api = `  https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api);
      setEpisodes(response.data);

      const { characters } = response.data;
      const promises = characters.map((character) => axios.get(character));
      const responses = await Promise.all(promises);
      const results = responses.map((response) => response.data);
      setResults(results);
    };
    fetchData();
  }, [id, api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-3">
          Episode Name:{' '}
          <span className="text-primary text-uppercase fw-bold">
            {name === undefined ? 'Unknown' : name}
          </span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === undefined ? 'Unknown' : air_date} | Episode:{' '}
          {episode === undefined ? 'Unknown' : episode}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-3">Select the episode:</h4>
          <InputGroup setId={setId} total={51} name="Episode" />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            {
              <Cards
                page="/episodes/"
                results={results}
                setResults={setResults}
                setId={setId}
                id={id}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
