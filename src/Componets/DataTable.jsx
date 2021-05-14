import React, { useState } from "react";
import "../Sass/DataTable.scss";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import html2pdf from "html2pdf.js";

function DataTable(props) {
  const [searchTerm, setsearchTerm] = useState("");

  const [currrentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(4);

  // const [sortType, setsortType] = useState(null);
  // const [sortedFiled, setSortedFiled] = useState("");
  // console.log("user data in data table", props);

  console.log(itemsPerPage);

  // define state for pagination
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const onInputChange = (value) => {
    setsearchTerm(value);
    setcurrentPage(1);
  };
 /////////////////////////////////////////////////// Searching Fillter ///////////////////////////////////////////////////////
  let search_data = props.data.userReducer.userdata.filter((val) => {
    if (searchTerm == "") return val;
    else if (val.fname.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
    else if (val.lname.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
    else if (val.salary.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
    else if (val.tech.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
    else if (val.age.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
  });

  const render_data = (search_data) => {
    return search_data.map((search_data, index) => {
      return (
        <tr key={index + 1}>
          <td>{search_data.fname}</td>
          <td>{search_data.lname}</td>
          <td>{search_data.tech}</td>
          <td>{search_data.age}</td>
          <td>{search_data.salary}</td>
        </tr>
      );
    });
  };

  console.log("data is of ", search_data);

  // convert data in json formate

  const copyTableData = JSON.stringify(search_data);
  console.log(copyTableData);
  const pages = [];
  for (let i = 1; i <= Math.ceil(search_data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  console.log(pages);

  // /////////////////////////////////////////calculate curent items per page ///////////////////////////////////////////////////

  const IndexOfLastItem = currrentPage * itemsPerPage;
  const indexOfFirstItem = IndexOfLastItem - itemsPerPage;
  const currentItems = search_data.slice(indexOfFirstItem, IndexOfLastItem);
  console.log("per page data is ", currentItems);

  //////////////////////////////////////////////////////// render pages ///////////////////////////////////////////////////

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const renderPagesNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currrentPage == number ? "active" : "not_active"}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  console.log(" renders pages is", renderPagesNumbers);

  // next button

  const handleNextbtn = () => {
    setcurrentPage(currrentPage + 1);

    if (currrentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currrentPage - 1);

    if ((currrentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };


  ////////////////////////////////////////////////////// Download Table Data in PDF Formate/////////////////////////////////////////
  const downloadPDF = () => {
    var element = document.getElementById("customers");
    html2pdf(element);
  };

  ////////////////////////////////////////////////sorting data for first name//////////////////////////////////////////////////////
 
  const onAscending = () => {
    console.log("before sorting data ", search_data);

     search_data = search_data.sort((a, b) => {
      return a.fname > b.fname ? 1 : -1;
    });
    console.log("ather sorting data ",  search_data );
  };






  // const onSort = (sortType) => {
  //   setsortType(sortType);
  // };
  // console.log(sortType);
  // if (sortType !== null) {
  //   console.log(search_data);
  //   const sorted = props.data.userReducer.userdata.sort((a, b) => {
  //     const isReversed = sortType === "asc" ? 1 : -1;
  //     console.log(isReversed);
  //     return isReversed * a.fname.localeCompare(b.fname);
  //   });
  //   console.log(sorted);
  // }

  return (
    <>
      <span style={{ float: "right" }}>
        {/* <NavLink to="/user-list/addUser">
          <button className="btn btn-secondary">Add User</button>
        </NavLink> */}
      </span>
      <div id="main1">
        <div className="row">
          <div className="col-md-12">
            <div className="card table-card">
              <div className="card-body">
                <h4 className="card-title">Data Export</h4>
                <h6 className="card-subtitle">
                  Export data to Copy, CSV, Excel, PDF & Print
                </h6>
                <div className="button-search-div">
                  <div className="button-div">
                    <button
                      className=" btn btn-primary div-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(copyTableData);
                      }}
                    >
                      Copy
                    </button>
                    <button className=" btn btn-primary div-btn">CSV</button>
                    <ReactHTMLTableToExcel
                      id="btn1"
                      className="btn btn-primary div-btn"
                      table="customers"
                      filename="admintablexls"
                      sheet="tablexls"
                      buttonText="Excel"
                    />
                    {/* <button className=" btn btn-primary div-btn">Excel</button> */}
                    <button
                      className=" btn btn-primary div-btn"
                      onClick={() => {
                        downloadPDF();
                      }}
                    >
                      PDF
                    </button>
                    <button className=" btn btn-primary div-btn">Print</button>
                  </div>

                  <div className="dataTables_filter">
                    <label>Search:</label>
                    <input
                      type="search"
                      class="form-control form-control-sm search-input"
                      placeholder=""
                      value={searchTerm}
                      onChange={(event) => {
                        onInputChange(event.target.value);
                        // setsearchTerm();
                        // setcurrentPage(1);
                      }}
                    />
                  </div>
                </div>

                <div className="table-responsive table-div">
                  <table id="customers">
                    <tr>
                      <th style={{ width: "166px" }}>
                        First Name{" "}
                        <i
                          class="fa fa-arrow-up"
                          onClick={() => {
                            onAscending();
                          }}
                        ></i>{" "}
                      </th>
                      <th style={{ width: "166px" }}>Last Name </th>
                      <th style={{ width: "182px" }}>Technology </th>
                      <th style={{ width: "28px" }}>Age</th>
                      <th style={{ width: "72px" }}>Salary</th>
                    </tr>
                    <tbody>
                      {search_data.length > 0 ? (
                        render_data(currentItems)
                      ) : (
                          <tr class="odd">
                            <td
                              valign="top"
                              colspan="6"
                              style={{
                                padding: "16px",
                                fontSize: "14px",
                                textAlign: "center",
                              }}
                            >
                              No matching records found
                          </td>
                          </tr>
                        )}
                    </tbody>

                    <tfoot>
                      <th style={{ width: "166px" }}> First Name</th>
                      <th style={{ width: "166px" }}> Last Name</th>
                      <th style={{ width: "182px" }}>Technology</th>
                      <th style={{ width: "28px" }}>Age</th>
                      <th style={{ width: "28px" }}>Salary</th>
                    </tfoot>
                  </table>
                </div>

                <ul className="PagesNumbers">
                  <li>
                    <button onClick={handlePrevbtn}>Previous</button>
                  </li>
                  {renderPagesNumbers}

                  <li>
                    <button onClick={handleNextbtn}>Next</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state,
});

export default connect(mapStateToProps)(DataTable);
