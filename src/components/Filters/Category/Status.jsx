import FilterBTN from './FilterBTN';

export default function Status() {
  const status = ['Alive', 'Dead', 'Unknown'];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-column gap-2">
          {status.map((item, index) => (
            <FilterBTN key={index} index={index} name="status" item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
