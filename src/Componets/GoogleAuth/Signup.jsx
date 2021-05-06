import React from "react";
import "../../Sass/Signin.scss";
import {NavLink} from "react-router-dom"

function Signup() {
  return (
    <div className="signin_div">
      <h3>Sign up</h3>

      <from>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Name" />
        </div>

        <div className="form-group">
          <input className="form-control" type="email" placeholder="Email" />
        </div>


        <div className="form-group">
          <input className="form-control" type="password" placeholder="password" />
        </div>


        <div className="form-group">
          <input className="form-control" type="password" placeholder="Confirm password" />
        </div>

        <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
             i agree to all Terms
            </label>
          </div>

          <button
            class="btn btn-block btn-lg btn-info btn-rounded btn1"
            type="submit"
          >
           Sign Up
          </button>

          <div className="signin-footer">

          Don't have an account? <NavLink to="/">Sign Up</NavLink> 
          </div>

        
      </from>
    </div>
  );
}

export default Signup;
