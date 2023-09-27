import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ setPageNumber, pageNumber, info }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <>
    <style>
      {`
        @media (max-width: 768px) {
          .next, .previous {
            display: none;
          }
          .pagination { 
              font-size: 1.4rem;
          }
        }
      
      `}
    </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        pageCount={info?.pages}
        previousLabel="Prev"
        previousClassName="btn btn-primary previous"
        nextLabel="Next"
        nextClassName="btn btn-primary next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width > 768 ? 2 : 1}
        onPageChange={(page) => setPageNumber(page.selected + 1)}
        activeClassName="active"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      />
    </>
  );
}

Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
  setPageNumber: PropTypes.func.isRequired,
};
