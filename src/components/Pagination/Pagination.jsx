import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

export default function Pagination({ setPageNumber, pageNumber, info }) {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      pageCount={info?.pages}
      previousLabel="Prev"
      previousClassName="btn btn-primary"
      nextLabel="Next"
      nextClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(page) => setPageNumber(page.selected + 1)}
      activeClassName="active"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    />
  );
}

Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
  setPageNumber: PropTypes.func.isRequired,
};
