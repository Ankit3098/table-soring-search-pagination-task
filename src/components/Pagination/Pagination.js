import React from "react";
import "./pagination.css";

function Pagination({ dataPerPage, data, paginate }) {
  // pagenumbers
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} href="!#" className="page-link ">
            {number}{" "}
          </a>
        </li>
      ))}
    </nav>
  );
}

export default Pagination;
