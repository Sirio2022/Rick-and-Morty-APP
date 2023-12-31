import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

import axios from 'axios';
import LoadingBox from './components/LoadingBox/LoadingBox';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Episodes from './components/Pages/Episodes';
import Location from './components/Pages/Location';
import CardDetails from './components/Cards/CardDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
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
        <h1 className="text-center mb-4">Characters</h1>
          <Search setSearch={setSearch} setPageNumber={setPageNumber} />

          <div className="container">
            <div className="row">
              <Filters
                setStatus={setStatus}
                setSpecies={setSpecies}
                setGender={setGender}
                setPageNumber={setPageNumber}
              />

              <div className="col-lg-8 col-12">
                <div className="row">
                  <Cards page="/" results={results} />
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
};

export default App;
