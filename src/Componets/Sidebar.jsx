import React, { useState } from "react";
import "../Sass/Home.scss";
import { NavLink } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import { connect } from "react-redux";
import { logOut, userData } from "../Redux/Actions/Action";
import { GoogleLogout } from "react-google-login";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import $ from "jquery";

function Sidebar(props) {
  console.log("Image Data", props);
  const [istoggle, setistoggle] = useState(false);
  const [istoggle1, setistoggle1] = useState(false);
  const [istoggle2, setistoggle2] = useState(false);
  const [istoggle3, setistoggle3] = useState(false);
  const [showcard, setshowcard] = useState(false);

  const logout = () => {
    console.log("logout sucessfull");
    props.logOut();
  };

  const logOutFail = () => {
    console.log("fail");
  };
  const showDropDown = () => {
    if (istoggle === false) {
      setistoggle(true);
    } else {
      setistoggle(false);
    }
    $(".icon-up").toggleClass("rotate");
  };

  const showAppDropDown = () => {
    if (istoggle1 === false) {
      setistoggle1(true);
    } else {
      setistoggle1(false);
    }
  };

  const showInboxDropDown = () => {
    if (istoggle2 === false) {
      setistoggle2(true);
    } else {
      setistoggle2(false);
    }
  };

  const showUiDropDown = () => {
    if (istoggle3 === false) {
      setistoggle3(true);
    } else {
      setistoggle3(false);
    }
  };

  const drop = () => {
    if (showcard === false) {
      setshowcard(true);
    } else {
      setshowcard(false);
    }
  };
  return (
    <>
      <div>
        <div id="mySidebar" className="sidebar">
          <NavLink to="/home">
            <h3 className="project-logo-name">Admin Penal</h3>
          </NavLink>

          <div className="profile">
            <img src={props.image} alt="user-img" class="img-circle" />
          </div>

          <div className="profie_name">
            <div data-toggle="dropdown" onClick={drop}>
              <span>{props.name}</span>
              <i class="fa fa-caret-down" style={{ marginLeft : "10px"}}></i>
            </div>
            {showcard && (
              <div
                className=" dropdown-menu-right mt-2 flipInY animated1"
                style={{ marginRight: "40px", zIndex: "9999" }}
                id="animated-example"
              >
                <div className="dropdown-item" style={{ fontSize: "16px" }}>
                  <PersonOutlineOutlinedIcon
                    style={{ fontSize: "20px", fontWeight: "100" }}
                  />
                  <span style={{ marginLeft : "10px"}}>My Profile</span>
                </div>
                <div className="dropdown-item" style={{ fontSize: "16px" }}>
                  <AccountBalanceWalletOutlinedIcon
                    style={{ fontSize: "20px", fontWeight: "100" , marginLeft : "10px" }}
                  />
                 <span style={{ marginLeft : "10px"}}></span> My Balance
                </div>
                <div className="dropdown-item" style={{ fontSize: "16px" }}>
                  <MailOutlineOutlinedIcon
                    style={{ fontSize: "20px", fontWeight: "100" ,marginLeft : "-30px" }}
                  />{" "}
                 <span style={{ marginLeft : "10px"}}> Inbox</span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item" style={{ fontSize: "16px" }}>
                  <SettingsOutlinedIcon
                    style={{ fontSize: "20px", fontWeight: "100"  , marginLeft : "10px"}}
                  />
                  Account Setting
                </div>{" "}
                <div className="dropdown-divider"></div>
                <NavLink
                  to="/"
                  // className="dropdown-item"
                  style={{ fontSize: "16px" }}
                >
                  {/* <PowerSettingsNewOutlinedIcon
          style={{ fontSize: "20px", fontWeight: "100" , display : "block"}}
        />{" "} */}
      <i class="fa fa-power-off" style={{ marginLeft : "-53px"}}></i>
                  <GoogleLogout
                    clientId="282374665536-la4j8iisqdkar5nsk1mu21d5lrmue08i.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                    onFailure={logOutFail}
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        style={{
                          border: "none",
                          outline: "none",
                          fontSize: "20px",
                          backgroundColor: "white",
                        }}
                      >
                        Logout
                      </button>
                    )}
                  ></GoogleLogout>{" "}
                </NavLink>
              </div>
            )}
          </div>

          <div className="menu">
            <p>-----PERSON</p>

            <div className="list">
              <li className="menu-list">
                <div className="hover-div">
                  <i class="fa fa-tachometer" aria-hidden="true"></i>
                  <span className="menu-name" onClick={showDropDown}>
                    Dashbord
                  </span>

                  <span class="badge badge-pill dashbord-pill">4</span>
                  <i
                    className="fa fa-chevron-right icon-up"
                    style={{
                      float: "right",
                      marginTop: "6px",
                      marginRight: "19px",
                      fontSize: "12px",
                    }}
                  ></i>
                </div>
                <div className="sub-list">
                  {istoggle ? (
                    <ul>
                      <li>Minimal</li>
                      <li>Analytical</li>
                      <li>Demographical</li>
                      <li>Modern</li>
                    </ul>
                  ) : (
                    " "
                  )}
                </div>
              </li>
            </div>

            <div className="list" onClick={showAppDropDown}>
              <li className="menu-list">
                <i class="fa fa-th-large"></i>
                <span className="menu-name">App</span>
                {/* <i className="fa fa-caret-down dropdown  dropdown-icon"></i> */}
                <i
                  class="fa fa-chevron-right"
                  style={{
                    float: "right",
                    marginTop: "6px",
                    marginRight: "19px",
                    fontSize: "12px",
                  }}
                ></i>
                {istoggle1 ? (
                  <ul>
                    <li>Calender</li>
                    <li>Chat app</li>
                    <li>Support Ticket</li>
                    <li>Contact Grid</li>
                  </ul>
                ) : (
                  " "
                )}
              </li>
            </div>

            <div className="list" onClick={showInboxDropDown}>
              <li className="menu-list">
                <i class="fa fa-envelope"></i>
                <span className="menu-name">inbox</span>
                <i
                  class="fa fa-chevron-right"
                  style={{
                    float: "right",
                    marginTop: "6px",
                    marginRight: "19px",
                    fontSize: "12px",
                  }}
                ></i>
                {istoggle2 ? (
                  <ul>
                    <li>Mailox</li>
                    <li>Mailbox Detail</li>
                    <li>Compose Mail</li>
                  </ul>
                ) : (
                  " "
                )}
              </li>
            </div>

            <div className="list" onClick={showUiDropDown}>
              <li className="menu-list">
                <i class="fa fa-paint-brush"></i>
                <span className="menu-name">Ui Element</span>
                <span class="badge badge-pill dashbord-pill2">25</span>
                <i
                  class="fa fa-chevron-right"
                  style={{
                    float: "right",
                    marginTop: "6px",
                    marginRight: "19px",
                    fontSize: "12px",
                    height: "6px!important",
                  }}
                ></i>
                {istoggle3 ? (
                  <ul>
                    <li>Cards</li>
                    <li>User Cards</li>
                    <li>Buttons</li>
                    <li>Models</li>
                  </ul>
                ) : (
                  " "
                )}
              </li>
            </div>

            <p>-----FORM TABLES AND WIDGETS</p>
            <div className="list">
              <li className="menu-list">
                <i class="fa fa-sticky-note-o" aria-hidden="true"></i>
                <span className="menu-name">Forms</span>
              </li>
            </div>

            <NavLink exact to="/data-table" className="table-link">  <div className="list">
              <li className="menu-list">
                <i class="fa fa-table"></i>
             <span className="menu-name">Tables</span>
              </li>
            </div></NavLink>

            <div className="list">
              <li className="menu-list">
                <i class="fa fa-cog" aria-hidden="true"></i>
                <span className="menu-name">Widgets</span>
              </li>
            </div>

            <p>-----EXTRA COMPONENTS</p>

            <div className="list">
              <li className="menu-list">
                <i class="fa fa-file" aria-hidden="true"></i>
                <span className="menu-name">Page Layouts</span>
              </li>
            </div>

            <div className="list">
              <li className="menu-list">
                <i class="fa fa-table"></i>
                <span className="menu-name">Sample Pages</span>
              </li>
            </div>

            <div className="list">
              <li className="menu-list">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
                <span className="menu-name">Charts</span>
              </li>
            </div>

            <div className="list">
              <li className="menu-list">
                <i class="fa fa-font-awesome" aria-hidden="true"></i>
                <span className="menu-name">Icons</span>
              </li>
            </div>

            <div className="list">
              <li className="menu-list">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span className="menu-name">Maps</span>
              </li>
            </div>
          </div>
          {/* <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a> */}

          {/* {showcard ? (
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p style={{ marginTop: "92px" }}>
                    Welcome Abhishek Dubey Profile Click to Flip
                  </p>
                </div>
                <div class="flip-card-back">
                  <div className="icon-name">
                    <div className="icon">
                      <i class="fa fa-user-o " aria-hidden="true"></i>
                    </div>
                    <div className="profile-list">
                      <span className="card-text">My Profile</span>
                    </div>
                  </div>

                  <div className="icon-name">
                    <div className="icon">
                      <i class="fa fa-credit-card-alt " aria-hidden="true"></i>
                    </div>
                    <div className="profile-list">
                      <span className="card-text">My Balance</span>
                    </div>
                  </div>

                  <div className="icon-name">
                    <div className="icon">
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    <div className="profile-list">
                      <span className="card-text">Inbox</span>
                    </div>
                  </div>

                  <div className="icon-name">
                    <div className="icon">
                      <i class="fa fa-cog" aria-hidden="true"></i>
                    </div>
                    <div className="profile-list">
                      <span className="card-text">Account Setting</span>
                    </div>
                  </div>

                  <div className="icon-name">
                    <div className="icon">
                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </div>
                    <NavLink to="/" style={{ marginTop : "2px" , marginLeft : " -25px"}}>
                     
                      <GoogleLogout
                        clientId="282374665536-la4j8iisqdkar5nsk1mu21d5lrmue08i.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                        onFailure={logOutFail}
                        render={(renderProps) => (
                          <button
                            onClick={renderProps.onClick}
                            style={{
                              border: "none",
                              outline: "none",
                              fontSize: "20px",
                              backgroundColor: "transparent",
                            }}
                          >
                      
                            Logout
                          </button>
                        )}
                      ></GoogleLogout>{" "}
                    </NavLink>
                  </div>

                  
                </div>
              </div>
            </div>
          ) : (
            ""
          )}  */}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  userData: (data) => dispatch(userData(data)),
  logOut: (data) => dispatch(logOut(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
