import React, { useState } from "react";
import "../Sass/Navbar.scss";

function Navbar() {
  const [toggle, settoggle] = useState(true);
  function openNav() {
    if (toggle === true) {
      settoggle(false);
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("main1").style.marginLeft = "250px";
    } else {
      settoggle(true);
      document.getElementById("mySidebar").style.width = "0px";
      document.getElementById("main").style.marginLeft = "0px";
      document.getElementById("main1").style.marginLeft = "0px";
    }
  }
  return (
    <div>
      <div id="main">
        <button class="openbtn" onClick={openNav}>
          ☰
        </button>
        <form class="app-search d-none d-md-block d-lg-block">
          <input
            type="text"
            class="search-cantrol"
            placeholder="Search &amp; enter"
          />
        </form>

        <div className="nav-right-icon">
          <div className="nav-icon">
            <i className="fa fa-envelope select" ></i>
            <div className="point"></div>
          </div>

          <div className="nav-icon">
          <i className="fa fa-edit edit-icon"></i>
            <div className="point"></div>
          </div>

          <div className="nav-icon">
          <i className="fa fa-file select"></i>
           
          </div>

          <div className="nav-icon">
          <i class="fa fa-cog setting-icon"></i>
           
          </div>
        </div>

        {/* <div className="nav-right-icon">
          <i className="fa fa-envelope select"></i>
          <div className="notify">
            <span className="point"></span>
          </div>

          <span className="point-icon"></span>
          <i className="fa fa-edit select"></i>
          <span className="point-icon"></span>
          <i className="fa fa-file select"></i>
          <i className="fa fa-cog select"></i>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
