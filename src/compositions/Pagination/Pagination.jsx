import React from "react";
import PropTypes from "prop-types";
import "./Pagination.scss";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const getPageNumbers = () => {
        const pages = [];
        if (currentPage === 1) {
            pages.push(1, 2, 3);
        } else if (currentPage === totalPages) {
            pages.push(totalPages - 2, totalPages - 1, totalPages);
        } else {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        }
        return pages.filter(page => page > 0 && page <= totalPages);
    };

    const pages = getPageNumbers();

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <button className="arrow" onClick={() => setCurrentPage(currentPage - 1)}>
                    ←
                </button>
            )}

            {pages.map((page) => (
                <button
                    key={page}
                    className={currentPage === page ? "active" : ""}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}

            {currentPage < totalPages && (
                <button className="arrow" onClick={() => setCurrentPage(currentPage + 1)}>
                    →
                </button>
            )}
        </div>
    );
};

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
