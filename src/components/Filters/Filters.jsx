import PropTypes from 'prop-types';

import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

export default function Filters({
  setStatus,
  setSpecies,
  setGender,
  setPageNumber,
}) {
  const clearFilters = () => {
    setStatus('');
    setSpecies('');
    setGender('');
  };

  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        className="text-center text-decoration-underline text-primary mb-4"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          clearFilters();
          setPageNumber(1);
          window.location.reload(false);
        }}
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
}

Filters.propTypes = {
  setStatus: PropTypes.func,
  setSpecies: PropTypes.func,
  setGender: PropTypes.func,
  setPageNumber: PropTypes.func,
};
