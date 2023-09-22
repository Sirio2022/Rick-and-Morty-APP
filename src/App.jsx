import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

import axios from 'axios';
import LoadingBox from './components/LoadingBox/LoadingBox';

function App() {
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  // Filters
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');

  const { info, results } = characters;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const response = await axios.get(api);
        setCharacters(response.data);
      };
      fetchData();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [pageNumber, api]);

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <div>
            <h1 className="text-center ubuntu my-4">
              Rick & Morty <span className="text-primary">APP</span>
            </h1>
          </div>

          <Search setSearch={setSearch} setPageNumber={setPageNumber} />

          <div className="container">
            <div className="row">
              <Filters setStatus={setStatus} setPageNumber={setPageNumber} setSpecies={setSpecies} setGender={setGender} />

              <div className="col-8">
                <div className="row">
                  <Cards results={results} />
                </div>
              </div>
            </div>
          </div>

          <Pagination
            info={info}
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
          />
        </>
      )}
    </>
  );
}

export default App;
