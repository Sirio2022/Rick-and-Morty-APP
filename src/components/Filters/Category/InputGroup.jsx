import propTypes from 'prop-types';

export default function InputGroup({ setId, total, name }) {
  return (
    <div className="input-group mb-3">
      <select
        defaultValue={'DEFAULT'}
        onChange={(e) => setId(e.target.value)}
        className="form-select"
        id="inputGroupSelect01"
      >
        <option>Choose...</option>
        {[...Array(total).keys()].map((item, index) => (
          <option key={index} value={index + 1}>
            {name} {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

InputGroup.propTypes = {
  setId: propTypes.func.isRequired,
  total: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
};
