import React from "react";
import "../Sass/Dashbord.scss";
import AreaCharts from "./AreaCharts";
import AreaChart from "./AreaCharts";
import BarCharts from "./BarCharts";
import Card from "./Card";
import Chart from "./Chart";
import Chat from "./Chat";
import Comment from "./Comment";
import Notification from "./Notification";
import PaiCharts from "./PaiCharts";
import Slider from "./Slider";
import Table from "./Table";
import ToDo from "./ToDo";
import Weather from "./Weather";
import { NavLink } from "react-router-dom";
function Dashbord() {
  return (
    <>
      <div id="main1">
        <div className="dash">
          {" "}
          <h4>Dashbord 1</h4>
          <div className="right-dash">
            <sapn className="span-home-text">Home</sapn>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <sapn className="span-dash-text">Dashbord1</sapn>
            <NavLink exact to="/addUser">
              <button className="addNew">
                <i className="fa fa-plus-circle"> &nbsp;</i>Create New
              </button>
            </NavLink>
          </div>
        </div>

        <div
          className="card-group mt-3 ml-3"
          style={{ margin: "0px 20px 0px 20px" }}
        >
          <Card
            fontColor="#fb9678"
            number="23"
            title="MYNEW CLIENTS"
            icon="fa fa-desktop"
          
          />
          <Card
            fontColor="#01c0c8"
            number="169"
            icon="fa fa-sticky-note-o"
            title="NEW PROJECTS"
          />

          <Card
            fontColor="#ab8ce4"
            icon="fa fa-file-text-o"
            title="NEW INVOICES"
            number="157"
          />
          <Card
            icon="fa fa-suitcase"
            fontColor="#00c292"
            title="ALL PROJECTS"
            number="431"
          />
        </div>

        <div
          className="row "
          style={{ marginLeft: "6px", marginTop: "10px", marginRight: "10px" }}
        >
          <Chart />
          <div className="col-sm-12 col-md-4 col-lr-4">
            <Weather />
            <Slider />
          </div>
        </div>

        <div
          className="row "
          style={{ marginLeft: "6px", marginTop: "10px", marginRight: "10px" }}
        >
          <Comment />
          <Table />
        </div>

        <div
          className="row "
          style={{ marginLeft: "6px", marginTop: "10px", marginRight: "10px" }}
        >
          <AreaCharts />
          <div className="col-sm-12 col-md-4 col-lr-4">
            <BarCharts />
            <PaiCharts />
          </div>
        </div>

        <div
          className="row"
          style={{
            marginLeft: "6px",
            marginTop: "10px",
            marginRight: "10px",
            display: "flex",
          }}
        >
          <ToDo />
          <Notification />
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Dashbord;
