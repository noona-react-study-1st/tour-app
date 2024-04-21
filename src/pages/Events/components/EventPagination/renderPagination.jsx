import { Pagination } from 'react-bootstrap';
import './renderPagination.style.css';

const renderPagination = (
  currentPage,
  handlePaginate,
  totalItems,
  eventsPerPage
) => {
  const totalPages = Math.ceil(totalItems / eventsPerPage);
  const totalPagesToShow = 5;
  const currentGroup = Math.ceil(currentPage / totalPagesToShow);

  const startPage = (currentGroup - 1) * totalPagesToShow + 1;
  const endPage = Math.min(startPage + totalPagesToShow - 1, totalPages);

  const paginationItems = [];

  paginationItems.push(
    <Pagination.First
      key='first'
      onClick={() => handlePaginate(1)}
      disabled={currentPage === 1}
    />,
    <Pagination.Prev
      key='prev'
      onClick={() => handlePaginate(Math.max(currentPage - 1, 1))}
      disabled={currentPage === 1}
    />
  );

  for (let i = startPage; i <= endPage; i++) {
    paginationItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => handlePaginate(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  paginationItems.push(
    <Pagination.Next
      key='next'
      onClick={() => handlePaginate(Math.min(currentPage + 1, totalPages))}
      disabled={currentPage === totalPages}
    />,
    <Pagination.Last
      key='last'
      onClick={() => handlePaginate(totalPages)}
      disabled={currentPage === totalPages}
    />
  );

  return (
    <Pagination className='justify-content-center'>
      {paginationItems}
    </Pagination>
  );
};

export default renderPagination;
