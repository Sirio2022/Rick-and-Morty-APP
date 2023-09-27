import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CardDetails() {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);
  console.log(character);

  const { image, name, origin, location, gender, species, status, type } =
    character;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(api);
        setCharacter(response.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="char img" className="img-fluid" />

        {(() => {
          if (status === 'Alive') {
            return <div className="badge bg-success fs-5">{status} </div>;
          } else if (status === 'Dead') {
            return <div className="badge bg-danger fs-5">{status} </div>;
          } else {
            return <div className="badge bg-secondary fs-5 ">{status} </div>;
          }
        })()}

        <div className="content">
          <div className="">
            <span className="fw-bold">Gender:</span> {gender}
          </div>
          <div className="">
            <span className="fw-bold">Species:</span> {species}
          </div>
          <div className="">
            <span className="fw-bold">Type:</span>{' '}
            {type === '' ? 'Unknown' : type}
          </div>
          <div className="">
            <span className="fw-bold">Origin:</span> {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Last Location:</span> {location?.name}
          </div>
        </div>
      </div>
    </div>
  );
}
