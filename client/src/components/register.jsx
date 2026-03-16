import "../index.css";
import { useState } from "react";

const RegForm = () => {
  // connect input to react state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  //change handler to capture what the user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //submit handler to collect data when the inputs in the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch(
        // base URL together with the End point
        "https://charity-minds.onrender.com/api/v1/auth/register",
        {
          method: "POST",  //the action you want to perform
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
      <div className="pb-4 pl-3 pr-3 mb-10 flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-2xl">Register to Charity Minds</h1>

        <form
          onSubmit={handleSubmit}
          className="mt-5 mb-5 p-4 bg-white border-2 border-gray-100 rounded-md shadow-xl"
        >
          <div className="grouped">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter you first name"
                onChange={handleChange} //connects the input to the state
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your second name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </div>

          <div className="grouped">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="yourmail@gmail.com"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                placeholder="+254712345678"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" onChange={handleChange}>
              <option value="0">--Select Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grouped">
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
                placeholder="**************"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="text"
                id="confirmPassword"
                placeholder="**************"
                onChange={handleChange}
              />
            </div>
          </div>

          <div id="terms-div">
            <input
              type="checkbox"
              name="terms"
              value="agree"
              required
              id="terms"
            />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>

          <div id="policy-div">
            <input
              type="checkbox"
              name="policy"
              value="agree"
              required
              id="policy"
            />
            <label htmlFor="policy">
              I have read and agree to the Privacy Policy
            </label>
          </div>

          <div>
            <input type="submit" value="Register" className="form-btn" />
          </div>
        </form>
      </div>
    </>
  );
};

export { RegForm };
