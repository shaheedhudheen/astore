import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginState, setLoginState] = useState(true);

  return (
    <div className=" flex justify-around items-center py-2 shadow sticky z-50 top-0">
      <h1 className="text-2xl font-bold">AStore</h1>
      <div>
        <div className="space-x-2">
          <input
            type="text"
            placeholder="search Here"
            className="px-5 py-2.5 rounded-lg font-medium text-sm border border-gray-300"
          />

          <button className="px-5 py-2.5 bg-blue-600 font-medium text-sm text-white rounded-lg">
            Search
          </button>
        </div>
      </div>
      <div className="space-x-2 flex">
        {loginState ? (
          <div className="flex items-center space-x-2">
            <p>Username</p>
            <Link to="/login">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Log in
              </button>
            </Link>
          </div>
        ) : (
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Log Out
          </button>
        )}
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          SELL
        </button>
      </div>
    </div>
  );
};

export default Header;
