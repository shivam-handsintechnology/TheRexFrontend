import React from "react";
import { Pagination } from "@mui/material"; // Import Pagination from Material UI

const usePaginationhook = ({ totalItems, perPage = 9, currentPage = 1, onPageChange }) => {
    const pageCount = Math.ceil(totalItems / perPage);

    const handlePageChange = (event, page) => {
        onPageChange(page);
    };

    return (
        <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handlePageChange}
            siblingCount={2} // Number of page links on each side of the current page
            boundaryCount={1} // Number of page links at the beginning and end
            shape="rounded" // Optional: gives it a rounded look
            variant="outlined" // Optional: changes the style of pagination
            color="primary" // Optional: defines the color of the active page
        />
    );
};

export default usePaginationhook;
