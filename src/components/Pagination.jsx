/* eslint-disable react/prop-types */

export default function Pagination({ data,
    error,
    isValidating,
    handleNext,
    handlePrevious,
    handlePageChange,
    MAX_PAGE,}) {
    if (isValidating && !data) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading posts: {error.message}</p>;
  if (!data || data.length === 0) return <p className="text-center text-gray-500">No posts available</p>;

  const pageNumbers = [];
  for (let i = 1; i <= MAX_PAGE; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={isValidating || pageNumber === data.page}
              className={`px-3 py-1 rounded ${isValidating || pageNumber === data.page ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>

  
      <ul className="space-y-4">
        {data.map((ele) => (
          <li key={ele.id} className="border p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">{ele.title}</h3>
            <p className="text-gray-600">{ele.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
