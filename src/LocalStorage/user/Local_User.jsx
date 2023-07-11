import React, { useState } from "react";
import Data from "./User.json";

export default function Local_User() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems] = useState(100); // Assuming you have a total of 100 items

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = Data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const renderPaginationDropdown = () => {
    return (
      <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
      </select>
    );
  };

  return (
    <>
      <div className="container">
        <table className="table  table-hover table-bordered mt-5 text-center mb-3">
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((value) => (
              <tr>
                <td>{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
              </tr>
            ))}

          </tbody>
        </table>
        <div className="pagination-container d-flex">
          <div className="px-3">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
          </div>
          <div className="px-3">
            <div className="dropdown-container">
              Items per page: {renderPaginationDropdown()}
            </div>
          </div>
          <div className="px-3">
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
