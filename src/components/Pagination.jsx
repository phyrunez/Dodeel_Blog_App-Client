const Pagination = ({ currentPage, totalPages, totalPageCount, onPageChange }) => {
    console.log(currentPage, totalPageCount)
    const getPaginationNumbers = () => {
      const paginationNumbers = [];
      for (let i = 1; i <= totalPageCount; i++) {
        paginationNumbers.push(i);
      }
      console.log(paginationNumbers)
      return paginationNumbers;
    };
  
    return (
      <div className="flex justify-center my-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {getPaginationNumbers().map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPageCount}
          className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;