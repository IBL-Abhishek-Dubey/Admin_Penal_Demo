import React from "react";
import "../../Sass/Signup.scss";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="main_div">
      <div className="signup-div">
        <h3>Sign up</h3>

        <from>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Name" />
          </div>

          <div className="form-group">
            <input className="form-control" type="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="password"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              i agree to all <span style={{ color : "#F05C2F"}}>Terms</span>
            </label>
          </div>

          <button
            class="btn btn-block btn-lg btn-info btn-rounded btn1"
            type="submit"
          >
            SIGN UP
          </button>

          <div class="signiup-footer" style={{ textAlign : "center" , marginTop : "40px"}}>
            Already have an account? <NavLink to="/">Sign in</NavLink>
          </div>
        </from>
      </div>
    </div>
  );
}

export default Signup;
