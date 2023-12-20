const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {

    const handleLastPage = () => {
        setCurrentPage(lastPage)
    }

    const handleFirstpage = () => {
      setCurrentPage(1)
  }

  const handleNextPage = () => {
    const nextPage =  currentPage + 1
    if(nextPage <= lastPage){
      setCurrentPage(nextPage)
    }
  }

  
  const handleBeforePage = () => {
    const beforePage =  currentPage - 1
    if(beforePage > 0){
      setCurrentPage(beforePage)
    }
  }





  return (
    <ul className="pb-4 text-lg flex gap-2 justify-center font-bold flex-wrap">
      <li>
        <button 
        onClick={handleFirstpage}
          className="p-2 rounded-md bg-red-200 hover:bg-red-600 hover:text-white 
            transition-colors"
        >
          {"<<"}
        </button>
      </li>
      <li>
        <button
        onClick={handleBeforePage}
          className="p-2 rounded-md bg-red-200 hover:bg-red-600 hover:text-white 
            transition-colors"
        >
          {"<"}
        </button>
      </li>
      {pagesInCurrentBlock.map((page) => (
        <li key={page}>
          <button
            onClick={() => setCurrentPage(page)}
            className={` p-2 bg-red-400 rounded-md hover:bg-red-600 hover:text-white transition-colors ${
              page === currentPage ? "bg-red-600 text-white" : "bg-red-200"
            }`}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
        onClick={handleNextPage}
          className="p-2 rounded-md bg-red-200 hover:bg-red-600 hover:text-white 
            transition-colors"
        >
          {">"}
        </button>
      </li>
      <li>
        <button
        onClick={handleLastPage}
          className="p-2 rounded-md bg-red-200 hover:bg-red-600 hover:text-white 
            transition-colors"
        >
          {">>"}
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
