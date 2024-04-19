import React from 'react';
import { Pagination } from 'react-bootstrap';
import './renderPagination.style.css';

const renderPagination = (currentPage, handlePaginate, totalItems, eventsPerPage) => {
  const totalPages = Math.ceil(totalItems / eventsPerPage);
  const totalPagesToShow = 5; // 한 묶음에 표시할 페이지 수
  const totalGroups = Math.ceil(totalPages / totalPagesToShow); // 전체 묶음 수
  const currentGroup = Math.ceil(currentPage / totalPagesToShow); // 현재 페이지가 속한 묶음

  // 현재 묶음의 시작 페이지와 끝 페이지 계산
  const startPage = (currentGroup - 1) * totalPagesToShow + 1;
  const endPage = Math.min(startPage + totalPagesToShow - 1, totalPages);

  const paginationItems = [];

  // 처음 페이지, 이전 페이지 버튼 추가
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

  // 페이지 번호 추가
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

  // 다음 페이지, 마지막 페이지 버튼 추가
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
