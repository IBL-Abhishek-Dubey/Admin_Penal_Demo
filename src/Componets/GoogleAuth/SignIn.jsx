import React from "react";
import GoogleLogin from "react-google-login";
import "../../Sass/Signin.scss";
import { NavLink  } from "react-router-dom";
import { useHistory } from "react-router";


function SignIn(props) {

  const history = useHistory();

  console.log("Google User Data " , props);
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    props.userData({
      name :response.profileObj.name,
      profile :response.profileObj.imageUrl,
      token : response.accessToken,
    });

    history.push("/home");
  };
  const handler = (e) => {
    console.log(typeof e.target.value);
  };
  return (
    <>
    <div className="main_div">

   
      <div className="signin_div">
        <h3>Sign in</h3>
        <from>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              placeholder="Username"
              onChange={handler}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <div className="forgate_password">
            <i class="fa fa-lock">
              <NavLink to="/forgot">Forgot pwd?</NavLink>
            </i>
          </div>

          <NavLink to="/home" >
            <button
              class="btn btn-block btn-lg btn-info btn-rounded btn1"
              type="submit"
            >
              Log In
            </button>
          </NavLink>

          <div className="google-btn">
            <GoogleLogin
              clientId="282374665536-la4j8iisqdkar5nsk1mu21d5lrmue08i.apps.googleusercontent.com"
              //   buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>

          <div className="signin-footer">
            Already Have an account? <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </from>
      </div>
      </div>
    </>
  );
}

export default SignIn;
