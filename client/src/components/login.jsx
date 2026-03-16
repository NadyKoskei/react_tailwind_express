import "../index.css";
import { useEffect, useState } from "react";

const LogForm = () => {
  //storing form values in state, to remember what the user typed
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try{
    const response = await fetch(
      "https://charity-minds.onrender.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      },
    );

    const data = await response.json();
    console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="pb-4 pl-3 pr-3 mb-10">
        <h1 className="text-center font-bold text-2xl">
          LogIn to your account
        </h1>
        <div className="flex flex-col justify-center items-center">
          <form onSubmit={handleLogin} className="border-2 border-gray-100 bg-white p-4 mt-5 mb-5 w-95 rounded-md shadow-xl">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
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
