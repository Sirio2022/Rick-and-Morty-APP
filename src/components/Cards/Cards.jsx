import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

export default function Cards({ results, page }) {
  let display;

  if (results) {
    display = results.map((character) => {
      const { image, name, id, location, status } = character;
      console.log(name);

      return (
        <Link
          className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark"
          key={id}
          to={`${page}${id}`}
          style={{ textDecoration: 'none' }}
        >
          <div className={`${styles.cards} d-flex flex-column justify-content-center `}>
            <img
              src={image}
              alt="char img"
              className={`${styles.img}   img-fluid `}
            />
            <div className="content p-2">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === 'Alive') {
              return (
                <div
                  className={`${styles.badge} badge bg-success position-absolute`}
                >
                  {status}{' '}
                </div>
              );
            } else if (status === 'Dead') {
              return (
                <div
                  className={`${styles.badge} badge bg-danger position-absolute`}
                >
                  {status}{' '}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} badge bg-secondary position-absolute`}
                >
                  {status}{' '}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = (
      <div className="col-4">
        <div className="alert alert-danger text-center ubuntu">
          No se encontraron resultados
        </div>
      </div>
    );
  }

  return <>{display}</>;
}

Cards.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.string.isRequired,
};
