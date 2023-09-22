import PropTypes from "prop-types";

import FilterBTN from "./FilterBTN";

export default function Species({ setSpecies, setPageNumber}) {
  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological Creature',
    'Animal',
    'Robot',
    'Disease',
    'Cronenberg',
    'unknown',
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-column gap-2">
          {species.map((item, index) => (
            <FilterBTN 
            task={setSpecies}
            setPageNumber={setPageNumber}
            key={index} 
            index={index} 
            name="species" 
            item={item}  />
          ))}
        </div>
      </div>
    </div>
  );
}

Species.propTypes = {
  setSpecies: PropTypes.func,
  setPageNumber: PropTypes.func,
};
