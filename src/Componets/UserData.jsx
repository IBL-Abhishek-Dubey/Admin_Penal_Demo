import React from "react";
import { NavLink } from "react-router-dom";
import {useTranslation} from "react-i18next";


function UserData(props) {
  const { t } = useTranslation();
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
          <h2>{t('user1.data')}</h2>
          <NavLink exact to="/user-list/addUser">
            <button type="submit" class="btn btn-success">
           {t('user.data')}
            </button>
          </NavLink>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">{t('img.data')}</th>
              <th scope="col">{t('name1.user')}</th>
              <th scope="col">{t('Age.age')}</th>
              <th scope="col">{t('Salary.slr')}</th>
              <th scope="col">Expercience</th>
              <th scope="col">{t('Technology.tn')}</th>
              <th scope="col">DOB</th>
              <th scope="col">City</th>
              <th scope="col">Collage Name</th>
              <th scope="col">Degree</th>
              <th scope="col">Final Year Project</th>
              <th scope="col">Company Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">{t('action.name')}</th>
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
                  <td>{value.dob}</td>
                  <td>{value.city}</td>
                  <td>{value.clg_name}</td>
                  <td>{value.degree}</td>
                  <td>{value.project}</td>
                  <td>{value.company}</td>
                  <td>{value.mobilenumber}</td>
                  <td>
                    <NavLink to="/user-list/updateuser">
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
                        {t('update.upd')}{" "}
                      </button>
                    </NavLink>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => props.remove(index)}
                    >
                      {" "}
                      {t('delete.dlt')}{" "}
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
