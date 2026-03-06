import "../index.css";
import { useEffect, useState } from "react";

const LogForm = () => {

  const [users, setUsers] = useState([]);

  return (
    <>
      <div className="pb-4 pl-3 pr-3 mb-10">
        <h1 className="text-center font-bold text-2xl">LogIn to your account</h1>
        <div className="flex flex-col justify-center items-center">
          <form className="border-2 border-gray-100 bg-white p-4 mt-5 mb-5 w-95 rounded-md shadow-xl">
            <div>
              <label htmlFor="username">UserName:</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-input"
              />
            </div>

            <div>
              <button type="submit" className="form-btn">
                LogIn
              </button>
            </div>
          </form>
          <p>
            Don't have an account? <a href="register.html">Register Here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export { LogForm };
