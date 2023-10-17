export const Sell = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-md  mx-auto my-8 space-y-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Sell your <span className="text-black">Items</span>
        </h1>
        <form className="space-y-2 flex flex-col">
          <div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="grid-state"
            >
              Category
            </label>
            <select
              className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Category"
            >
              <option value="automobile">Automobile</option>
              <option value="properties">Properties</option>
              <option value="mobiles">Mobiles</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="books">Books</option>
              <option value="others">Other Items</option>
            </select>
          </div>

          <div className="">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Enter your product title"
              id="title"
              className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            />
          </div>
          <div className="">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              rows={5}
              type="text"
              placeholder="Describe your product"
              id="description"
              className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            />
          </div>

          <div className="">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              id="price"
              className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            />
          </div>
          <div className="">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="location"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Enter your location"
              id="title"
              className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
           Post
          </button>
        </form>
      </div>
    </div>
  );
};
