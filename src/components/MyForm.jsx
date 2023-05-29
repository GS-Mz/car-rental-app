

const Form = () => {

  return (
    <div className="flex flex-row  justify-center relative mt-[-45px]">
      <form className="flex sm-max:flex-col justify-between items-center shadow-2xl w-[80%] max-w-7xl px-6 py-4 rounded-lg bg-white sm-max:px-10 sm-max:py-6">
        <div className="mr-4 sm-max:w-full sm-max:py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="appearance-none focus:outline-none w-full text-gray-700 py-1 leading-tight "
            id="location"
            type="text"
            placeholder="Search your location..."
          />
        </div>
        <div className="mr-4 sm-max:w-full sm-max:py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="pickup-date"
          >
            Pickup date
          </label>
          <input
            className="appearance-none focus:outline-none w-full text-gray-700 py-1 leading-tight"
            id="pickup-date"
            type="date"
          />
        </div>
        <div className="mr-4 sm-max:w-full sm-max:py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="return-date"
          >
            Return date
          </label>
          <input
            className="appearance-none focus:outline-none w-full text-gray-700 py-1 leading-tight"
            id="return-date"
            type="date"
          />
        </div>
        <button
          className="w-32 h-12 bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline sm-max:mt-4"
          type="button"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
