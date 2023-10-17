import { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-md  mx-auto my-8 space-y-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Sign <span className="text-black">In</span>
        </h1>

        <form className="space-y-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
          />

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          {"Don't"} have an account?
          <Link to="/register">
            <span className="text-blue-700"> Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
