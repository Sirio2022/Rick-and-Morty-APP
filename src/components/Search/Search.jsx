import PropTypes from 'prop-types';
import styles from './Search.module.scss';

export default function Search({ setSearch, setPageNumber }) {
  return (
    <form className="d-flex justify-content-center gap-1 mb-5">
      <input
        type="text"
        placeholder="Search for characters"
        className={styles.input}
        onChange={(e) => {
          setSearch(e.target.value, setPageNumber(1));
        }}
      />
      <button
        className={`${styles.btn} btn btn-primary fs-5`}
        type="submit"
        onClick={(e) => e.preventDefault()}
      >
        Search
      </button>
    </form>
  );
}

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setPageNumber: PropTypes.func.isRequired,
};
