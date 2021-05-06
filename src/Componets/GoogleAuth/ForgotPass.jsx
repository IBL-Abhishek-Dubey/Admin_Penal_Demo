import React from 'react'
import "../../Sass/Signin.scss";

function ForgotPass() {
    return (
        <>
            <div className="forgot-pass">
                   <h3>Recover Password</h3>
                   <p>Enter your Email and instructions will be sent to you!</p>   
                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                   <div>
                   <button class="btn btn-warning btn-lg btn-block text-uppercase waves-effect waves-light btn2" type="submit">Reset</button>

                   </div>
            </div>
        </>
    )
}

export default ForgotPass
