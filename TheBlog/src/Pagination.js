import React from "react";

const Pagination = ({ total, currentPage, onPageChange }) => {
    const displayPages = 6;
    const halfDisplay = Math.floor(displayPages / 2);

    const startPage = Math.max(1, currentPage - halfDisplay);
    const endPage = Math.min(total, startPage + displayPages - 1);

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= total && page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <div className="pagination">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &laquo;
            </button>

            {startPage > 1 && (
                <>
                    <button onClick={() => handlePageChange(1)}>1</button>
                    {startPage > 2 && <span className="ellipsis">...</span>}
                </>
            )}

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={page === currentPage ? "active" : ""}
                >
                    {page}
                </button>
            ))}

            {endPage < total && (
                <>
                    {endPage < total - 1 && (
                        <span className="ellipsis">...</span>
                    )}
                    <button onClick={() => handlePageChange(total)}>
                        {total}
                    </button>
                </>
            )}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === total}
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
