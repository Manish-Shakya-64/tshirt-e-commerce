import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Pagination = ({ totalPages }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    
    // Get current page from URL, default to 1 if not set
    const currentPageFromUrl = parseInt(searchParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = React.useState(currentPageFromUrl);

    // Update URL when the current page changes
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            navigate(`?page=${newPage}`);  // Update URL with new page
        }
    };

    // Sync the component state with the URL
    useEffect(() => {
        setCurrentPage(currentPageFromUrl);
    }, [currentPageFromUrl]);

    // Logic to determine pages to show
    const getPageNumbers = () => {
        if (currentPage === 1) {
            return [1, 2];
        } else if (currentPage === totalPages) {
            return [totalPages - 1, totalPages];
        } else {
            return [currentPage, currentPage + 1];
        }
    };

    return (
        <div className="flex items-center space-x-2">
            {/* Previous Button (only shown if currentPage > 1) */}
            {currentPage > 1 && (
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="w-12 h-12 border border-mehndi text-mehndi flex items-center justify-center text-xl"
                >
                    ←
                </button>
            )}

            {/* Page Numbers */}
            {getPageNumbers().map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-12 h-12 border border-mehndi ${
                        page === currentPage ? 'bg-mehndi  text-white' : 'text-mehndi flex items-center justify-center'
                    }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            {currentPage < totalPages && (
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="w-12 h-12 border border-mehndi text-mehndi flex items-center justify-center text-xl"
                >
                    →
                </button>
            )}
        </div>
    );
};

export default Pagination;
