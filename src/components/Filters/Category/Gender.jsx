import FilterBTN from './FilterBTN';

export default function Gender() {
  const genders = ['female', 'male', 'genderless', 'unknown'];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-column gap-2">
          {genders.map((item, index) => (
            <FilterBTN key={index} index={index} name="gender" item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
