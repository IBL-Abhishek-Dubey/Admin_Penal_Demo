import React from "react";

import { useState } from "react";
import { Redirect } from "react-router-dom";
import "../Sass/addUser.scss";

function AddUser(props) {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Age, setAge] = useState("");
  const [Salary, setSalary] = useState("");
  const [Exprience, setExprience] = useState("");
  const [Technology, setTechnology] = useState("");
  const [profile, setprofile] = useState("");
  const [FnameErr, setFnameErr] = useState(false);
  const [LnameErr, setLnameErr] = useState(false);
  const [AgeErr, setAgeErr] = useState(false);
  const [SalaryErr, setSalaryErr] = useState(false);
  const [ExprienceErr, setExprienceErr] = useState(false);
  const [TechnologyErr, setTechnologyErr] = useState(false);
  const [profileErr, setprofileErr] = useState(false);
  const [isValid, setisValid] = useState(false);

  function ValidateForm(e) {
    let fnameValue = document.getElementById("fname").value;
    let lnameValue = document.getElementById("lname").value;
    let ageValue = document.getElementById("age").value;
    let salaryValue = document.getElementById("salary").value;
    let exprience = document.getElementById("exampleFormControlSelect2");
    let technology = document.getElementById("exampleFormControlSelect3");
    let profileValue = document.getElementById("image").value;

    if (fnameValue === "") {
      setFnameErr(true);
    }
    if (lnameValue === "") {
      setLnameErr(true);
    }
    if (ageValue === "") {
      setAgeErr(true);
    }
    if (salaryValue === "") {
      setSalaryErr(true);
    }

    if (exprience.value === "") {
      setExprienceErr(true);
    }

    if(technology.value === ""){
      setTechnologyErr(true);
    }
    if (profileValue === "") {
      setprofileErr(true);
    }
    if (
      fnameValue !== "" &&
      lnameValue !== "" &&
      ageValue !== "" &&
      salaryValue !== "" &&
      exprience.value !== "" &&
      technology.value !=="" &&
      profileValue !== ""
    ) {
      setisValid(true);
      setFname("");
      setLname("");
      setAge("");
      setSalary("");
      setExprience("");
      setTechnology("");
      setprofile("");
      props.addData({
        id: Math.random(),
        fname: Fname,
        lname: Lname,
        age: Age,
        exp: Exprience,
        tech : Technology,
        salary: Salary,
        profile: profile,
      });
    }
  }

  if (isValid) {
    return <Redirect to="/userData" />;
  }

  return (
    <>
         <div id="main1" style={{ marginTop : "-29px"}}>
      <div className="container">
        <h2 style={{ marginTop: "30px" }}> Add User Data</h2>
        <>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                First Name
              </label>
              <input
                id="fname"
                type="text"
                class="form-control"
                value={Fname}
                onChange={(e) => {
                  setFname(e.target.value);
                  setFnameErr(false);
                }}
              />
              {FnameErr ? (
                <div id="checkFname">Enter First Name..!!!!</div>
              ) : (
                ""
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Last Name
              </label>
              <input
                id="lname"
                type="text"
                class="form-control"
                value={Lname}
                onChange={(e) => {
                  setLname(e.target.value);
                  setLnameErr(false);
                }}
              />
              {LnameErr ? <div id="checkLname">Enter Last Name..!!!!</div> : ""}
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Age
              </label>
              <input
                id="age"
                type="text"
                class="form-control"
                value={Age}
                onChange={(e) => {
                  setAge(e.target.value);
                  setAgeErr(false);
                }}
              />
              {AgeErr ? <div id="checkAge">Enter Age..!!!!</div> : ""}
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Salary
              </label>
              <input
                id="salary"
                type="text"
                class="form-control"
                value={Salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                  setSalaryErr(false);
                }}
              />
              {SalaryErr ? <div id="checksalary">Enter Salary..!!!!</div> : ""}
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect2">Exprience :</label>
              <select
                class="form-control"
                id="exampleFormControlSelect2"
                value={Exprience}
                onChange={(e) => {
                  setExprience(e.target.value);
                  setExprienceErr(false);
                }}
              >
                <option value="">Select--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {ExprienceErr ? (
                <div id="checkexp">Select Number of Exprience..!!!!</div>
              ) : (
                ""
              )}
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect3">Technology :</label>
              <select
                class="form-control"
                id="exampleFormControlSelect3"
                value={Technology}
                onChange={(e) => {
                  setTechnology(e.target.value);
                  setTechnologyErr(false);
                }}
              >
                <option value="">Select--</option>
                <option value="React.js">React.js</option>
                <option value="Angular.js">Angular.js</option>
                <option value="Django">Django</option>
                <option value="Laravel">Laravel</option>
                <option value="flutter">flutter</option>
              </select>
              {TechnologyErr ? (
                <div id="checktech">Select The Technology..!!!!</div>
              ) : (
                ""
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                <b>Upload Profile Image</b>
              </label>
              <br />
              <div>
                {profile !== "" ? (
                  <img
                    id="image"
                    src={profile}
                    alt="profile"
                    style={{ height: "100px", width: "150px" }}
                  />
                ) : (
                  ""
                )}
              </div>
              <br />
              <input
                id="image"
                type="file"
                onChange={(e) => {
                  setprofile(URL.createObjectURL(e.target.files[0]));
                  setprofileErr(false);
                }}
              />
              {profileErr ? (
                <div id="checkProfile">Select Image..!!!!</div>
              ) : (
                ""
              )}
            </div>

            <button
              type="reset"
              class="btn btn-secondary"
              onClick={(e) => {
                ValidateForm(e);
              }}
            >
              Save
            </button>
          </form>
        </>
      </div>
      </div>
    </>
  );
}

export default AddUser;
