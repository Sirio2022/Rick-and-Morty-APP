import PropTypes from 'prop-types';

import FilterBTN from './FilterBTN';

export default function Gender({ setGender, setPageNumber }) {
  const genders = ['female', 'male', 'genderless', 'unknown'];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-column gap-2">
          {genders.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="gender"
              item={item}
              task={setGender}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Gender.propTypes = {
  setGender: PropTypes.func,
  setPageNumber: PropTypes.func,
};
