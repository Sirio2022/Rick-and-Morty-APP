import { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import axios from 'axios';
import InputGroup from '../Filters/Category/InputGroup';

export default function Location() {
  const [episodes, setEpisodes] = useState([]);
  const [id, setId] = useState(1);
  const [results, setResults] = useState([]);
  console.log(results);

  const { name, type, dimension } = episodes;

  const api = `  https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api);
      setEpisodes(response.data);

      const { residents } = response.data;
      const promises = residents.map((resident) => axios.get(resident));
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
          Location:{' '}
          <span className="text-primary text-uppercase fw-bold">
            {name === undefined ? 'Unknown' : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === undefined ? 'Unknown' : dimension} | Type:{' '}
          {type === undefined ? 'Unknown' : type}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-3">Select the location:</h4>
          <InputGroup setId={setId} total={126} name="Location" />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            {
              <Cards
                page="/location/"
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
