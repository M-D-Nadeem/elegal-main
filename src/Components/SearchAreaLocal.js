const SearchAreaLocal = (props) => {
  return (
    <div className="search flex flex-col justify-center items-center w-80 lg:w-full max-w-2xl h-40 space-y-4">
      <div className="text-3xl w-full font-bold">You searched for:</div>
      <div className="searchbar w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2">
        <div className="w-full h-12">
          <input
            type="text"
            name=""
            id=""
            className="w-full h-full rounded-2xl bg-white px-4 text-lg lg:rounded-none lg:rounded-l-3xl border outline-none hover:ring-1 focus:ring-2 ring-card-btn"
            placeholder={global.UserSearchService}
          />
        </div>
        <div className="w-full h-12">
          <input
            type="text"
            name=""
            id=""
            className="w-full h-full rounded-2xl lg:rounded-none lg:rounded-r-3xl bg-white px-4 text-lg border outline-none hover:ring-1 focus:ring-2 ring-card-btn"
            placeholder={global.UserSearchLocation}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAreaLocal;
