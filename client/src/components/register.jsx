import "../index.css";

const RegForm = () => {
    return(
        <>
        <div className="pb-4 pl-3 pr-3 mb-10 flex flex-col justify-center items-center">
            <h1>Register to Charity Minds</h1>

        <form
          action=""
          method="post"
          className="mt-5 mb-5 p-4 bg-white border-2 border-gray-100 rounded-md shadow-xl"
        >
          
        <div className="grouped">
          <div className="form-group">
            <label for="fName">First Name:</label>
            <input type="text" id="fName" placeholder="Enter you first name" />
          </div>

          <div className="form-group">
            <label for="lName">Last Name:</label>
            <input type="text" id="lName" placeholder="Enter your second name" />
          </div>
        </div>

        <div className="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>

        <div className="grouped">
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="yourmail@gmail.com" />
          </div>

          <div className="form-group">
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" placeholder="+254712345678" />
          </div>
        </div>

        <div className="form-group">
          <label for="dob">Date of Birth:</label>
          <input type="date" id="dob" />
        </div>

        <div className="form-group">
          <label for="gender">Gender:</label>
          <select id="gender">
            <option value="0">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grouped">
          <div className="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="**************" />
          </div>

          <div className="form-group">
            <label for="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="**************"
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
            <label for="terms">I agree to the Terms and Conditions</label>
          </div>

          <div id="policy-div">
            <input
              type="checkbox"
              name="policy"
              value="agree"
              required
              id="policy"
            />
            <label for="policy"
              >I have read and agree to the Privacy Policy</label
            >
          </div>

          <div>
            <input type="submit" value="Register" className="form-btn" />
          </div>
        </form>
        </div>
        </>
    );
}

export { RegForm };