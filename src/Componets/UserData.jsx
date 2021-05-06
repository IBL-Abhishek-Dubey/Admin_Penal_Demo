import React from "react";
import { NavLink } from "react-router-dom";



function UserData(props) {
  console.log("table data", props.data);
  return (
    <>
    <span style={{  float : "right"}}>
          <NavLink to="/home"><button className="btn btn-secondary">Home</button>
</NavLink>    
</span>  
     <div id="main1" >
     
     
      <div className="container">
        <div className="add_auther_btn">
          <h2>Users</h2>
          <NavLink exact to="/addUser">
            <button type="submit" class="btn btn-success">
            Add Users
            </button>
          </NavLink>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Profile Image</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
              <th scope="col">Expercience</th>
              <th scope="col">Technology</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.data.userReducer.userdata.map((value, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{ height: "70px", width: "100px" }}
                      src={value.profile}
                      alt="profile"
                    />
                  </td>
                  <td>
                    {value.fname} &nbsp; {value.lname}
                  </td>
                  <td>{value.age}</td>
                  <td>{value.salary}</td>
                  <td>{value.exp} Years</td>
                  <td>{value.tech}</td>
                  <td>
                    <NavLink to="/updateuser">
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          props.updateData({
                            id: value.id,
                            fname: value.fname,
                            lname: value.lname,
                            salary : value.salary ,
                            exp : value.exp,
                            tech :value.tech,
                            profile: value.profile,
                          })
                        }
                      >
                        {" "}
                        Update{" "}
                      </button>
                    </NavLink>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => props.remove(index)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default UserData;
