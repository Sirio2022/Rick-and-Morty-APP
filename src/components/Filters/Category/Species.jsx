import FilterBTN from "./FilterBTN";

export default function Species() {
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
        <div className="accordion-body">
          {species.map((item, index) => (
            <FilterBTN key={index} index={index} name="species" item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
