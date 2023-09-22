import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

export default function Filters() {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        className="text-center text-decoration-underline text-primary mb-4"
        style={{ cursor: 'pointer' }}
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />
      </div>
    </div>
  );
}
