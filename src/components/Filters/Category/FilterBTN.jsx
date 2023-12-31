import PropTypes from 'prop-types';

export default function FilterBTN({ name, index, item, task, setPageNumber }) {
  return (
    <div>
      <style>
        {`
                .x:checked + label {
                background-color: #0d6efd;
                color: white;
                }


            input[type="radio"] {
                display: none;
            }
            `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={() => {
            setPageNumber(1);
            task(item);
          }}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
}

FilterBTN.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  task: PropTypes.func,
  setPageNumber: PropTypes.func,
};
