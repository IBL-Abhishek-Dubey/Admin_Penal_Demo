import React, { useState, useRef } from "react";
import "../Sass/DataTable.scss";
import { connect } from "react-redux";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import html2pdf from "html2pdf.js";
import ReactToPrint from "react-to-print";
import CsvDownloader from "react-csv-downloader";
import ReactToPdf from "react-to-pdf";
import { useTranslation } from "react-i18next";

function DataTable(props) {
  const [data, setData] = useState(props.data.userReducer.userdata);
  const [searchTerm, setsearchTerm] = useState("");
  // const [sortType, setsortType] = useState(null);
  const [sortedFiled, setSortedFiled] = useState();
  const [currrentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(4);

  const componentRef = useRef();
  const { t } = useTranslation();
  // const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
  };

  console.log("data is", data);
  // define state for pagination
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  /////////////////////////////////////////////////// Searching Fillter ///////////////////////////////////////////////////////
  const onInputChange = (value) => {
    setsearchTerm(value);
    setcurrentPage(1);
  };
  let search_data = data.filter((val) => {
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
            <td>{index + 1}</td>
          <td>{search_data.fname}</td>
          <td>{search_data.lname}</td>
          <td>{search_data.tech}</td>
          <td>{search_data.age}</td>
          <td>{search_data.salary}</td>
           <td>{search_data.exp}</td>
           {/*<td>{search_data.dob}</td>
          <td>{search_data.city}</td>
          <td>{search_data.clg_name}</td>
          <td>{search_data.degree}</td>
         
          <td>{search_data.company}</td>
          <td>{search_data.mobilenumber}</td> 
         <td>
         <img
                      style={{ height : "50px" , width: "100%" }}
                      src={search_data.profile}
                      alt="profile"
                    />

         
           </td> */}
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

  const onAscending = (key) => {
    document.getElementById("first_name").style.color = "black";
    document.getElementById("first_name_again").style.color = "#BDBEBF";
    console.log(sortedFiled);
    console.log("before sorting data ", data);

    const newData = [...data].sort((a, b) => {
      return a[key] > b[key] ? 1 : -1;
    });

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  const onDescending = (key) => {
    document.getElementById("first_name").style.color = "#BDBEBF";
    document.getElementById("first_name_again").style.color = "black";
    const newData = [...data].sort((a, b) => {
      return a[key] < b[key] ? 1 : -1;
    });

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  const LastNameAscending = (key) => {
    document.getElementById("last_name_icon1").style.color = "black";
    document.getElementById("last_name_icon2").style.color = "#BDBEBF";
    const newData = [...data].sort((a, b) => {
      return a[key] > b[key] ? 1 : -1;
    });

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  const LastNameDescending = (key) => {
    document.getElementById("last_name_icon1").style.color = "#BDBEBF";
    document.getElementById("last_name_icon2").style.color = "black";
    const newData = [...data].sort((a, b) => {
      return a[key] < b[key] ? 1 : -1;
    });

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  ////////////////////////////////////// accending and descending sorting for technology filed //////////////////////////////////////////

  const TachnologyAscending = (key) => {
    //  setSortedFiled(key)
    // console.log("sorted filed is" , sortedFiled);
    document.getElementById("tech_icon_1").style.color = "black";
    document.getElementById("tech_icon_2").style.color = "#BDBEBF";
    const newData = [...data].sort((a, b) => {
      return a[key] > b[key] ? 1 : -1;
    });

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  const TachnologyDescending = (key) => {
    //  setSortedFiled(key)
    // console.log("sorted filed is" , sortedFiled);
    document.getElementById("tech_icon_1").style.color = "#BDBEBF";
    document.getElementById("tech_icon_2").style.color = "black";
    const newData = [...data].sort((a, b) => {
      return a[key] < b[key] ? 1 : -1;
    });

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  ///////////////////////////////////////// accending and descending sorting for age filed //////////////////////////////////////

  const AgeAscending = (key) => {
    document.getElementById("age_icon_1").style.color = "black";
    document.getElementById("age_icon_2").style.color = "#BDBEBF";
    //  setSortedFiled(key)
    // console.log("sorted filed is" , sortedFiled);

    const newData = [...data].sort((a, b) => {
      return a[key] > b[key] ? 1 : -1;
    });

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  const AgeDescending = (key) => {
    document.getElementById("age_icon_1").style.color = "#BDBEBF";
    document.getElementById("age_icon_2").style.color = "black";
    //  setSortedFiled(key)
    // console.log("sorted filed is" , sortedFiled);
    const newData = [...data].sort((a, b) => {
      return a[key] < b[key] ? 1 : -1;
    });

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  ///////////////////////////////////////// accending and descending sorting for Salary filed //////////////////////////////////////

  const SalaryAscending = (key) => {
    document.getElementById("salary_icon_1").style.color = "black";
    document.getElementById("salary_icon_2").style.color = "#BDBEBF";
    //  setSortedFiled(key)
    // console.log("sorted filed is" , sortedFiled);
    const newData = [...data].sort((a, b) => a[key] - b[key]);

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  const SalaryDescending = (key) => {
    document.getElementById("salary_icon_1").style.color = "#BDBEBF";
    document.getElementById("salary_icon_2").style.color = "black";
    //  setSortedFiled(key)
    // console.log("sorted filed is" , sortedFiled);
    const newData = [...data].sort((a, b) => b[key] - a[key]);

    setData(newData);
    console.log("ather sorting data ", newData);
  };

  //////////////////////////////////////////////////// icon functions //////////////////////////////////////////

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
                <h4 className="card-title">{t("DataExport.export")}</h4>
                <h6 className="card-subtitle">
                  {t("ExptoCopy.exp")}, CSV, {t("Excel.xls")}, PDF &{" "}
                  {t("Print.pri")}
                </h6>
                <div className="button-search-div">
                  <div className="button-div">
                    <button
                      className=" btn btn-primary div-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(copyTableData);
                      }}
                    >
                      {t("Copy.cp")}
                    </button>

                    <CsvDownloader
                      filename="myfilecsv"
                      extension=".csv"
                      className=" btn btn-primary div-btn"
                      datas={search_data}
                      text="Csv"
                    />
                    {/* <button className=" btn btn-primary div-btn">CSV</button> */}

                    <ReactHTMLTableToExcel
                      id="btn1"
                      className="btn btn-primary div-btn"
                      table="customers"
                      filename="admintablexls"
                      sheet="tablexls"
                      buttonText={t("Excel.xls")}
                    />
                    {/* <button className=" btn btn-primary div-btn">Excel</button> */}
                    <ReactToPdf
                      targetRef={componentRef}
                      filename="div-blue.pdf"
                      options={options}
                      x={0.1}
                      y={0.1}
                      scale={0.8}
                    >
                      {({ toPdf }) => (
                        <button
                          onClick={toPdf}
                          className="btn btn-primary div-btn"
                        >
                          {t("PDF.1")}
                        </button>
                      )}
                    </ReactToPdf>
                    {/* <button
                      className=" btn btn-primary div-btn"
                      onClick={() => {
                        downloadPDF();
                      }}
                    >
                      PDF
                    </button> */}
                    <ReactToPrint
                      trigger={() => (
                        <button className=" btn btn-primary div-btn">
                          {t("Print.pri")}
                        </button>
                      )}
                      content={() => componentRef.current}
                    />
                    {/* <button className=" btn btn-primary div-btn">Print</button> */}
                  </div>

                  <div className="dataTables_filter">
                    <label>{t("Search.srh")}:</label>
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

                <div className=" table-div table-responsive">
                  <table id="customers" ref={componentRef}>
                    <tr>
                    <th > Sr No. </th>
                      <th >
                        {t("FirstName.fn")}
                        <i
                          id="first_name"
                          class="fa fa-long-arrow-up up_arrow"
                          onClick={() => {
                            onAscending("fname");
                          }}
                        ></i>
                        <i
                          id="first_name_again"
                          class="fa fa-long-arrow-down"
                          onClick={() => {
                            onDescending("fname");
                          }}
                        ></i>
                      </th>
                      <th >
                        {t("LastName.ln")}
                        <i
                          id="last_name_icon1"
                          class="fa fa-long-arrow-up  up_arrow_lastname"
                          onClick={() => {
                            LastNameAscending("lname");
                          }}
                        ></i>
                        <i
                          id="last_name_icon2"
                          class="fa fa-long-arrow-down"
                          onClick={() => {
                            LastNameDescending("lname");
                          }}
                        ></i>
                      </th>
                      <th >
                        {t("Technology.tn")}
                        <i
                          id="tech_icon_1"
                          class="fa fa-long-arrow-up up_arrow_tech"
                          onClick={() => TachnologyAscending("tech")}
                        ></i>
                        <i
                          id="tech_icon_2"
                          class="fa fa-long-arrow-down"
                          onClick={() => TachnologyDescending("tech")}
                        ></i>
                      </th>
                      <th >
                        {t("Age.age")}
                        <i
                          id="age_icon_1"
                          class="fa fa-long-arrow-up up_arrow_age "
                          onClick={() => AgeAscending("age")}
                        ></i>
                        <i
                          id="age_icon_2"
                          class="fa fa-long-arrow-down"
                          onClick={() => AgeDescending("age")}
                        ></i>
                      </th>
                      <th >
                        {t("Salary.slr")}
                        <i
                          id="salary_icon_1"
                          class="fa fa-long-arrow-up up_arrow_salary"
                          onClick={() => SalaryAscending("salary")}
                        ></i>
                        <i
                          id="salary_icon_2"
                          class="fa fa-long-arrow-down"
                          onClick={() => SalaryDescending("salary")}
                        ></i>
                      </th>
                      <th >Experience</th>
                       {/* <th> Date of Birth </th>
                       <th > City </th>
                      <th > Collage Name </th>
                      <th > Degree </th>
                      
                      <th > Company Name </th>
                      <th > Mobile Number </th> 
                      <th >
                        Profie
                      </th> */}
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
                            {t("Notfound.not")}
                          </td>
                        </tr>
                      )}
                    </tbody>

                    <tfoot>
                    <th > Sr No. </th>
                      <th > {t("FirstName.fn")}</th>
                      <th > {t("LastName.ln")}</th>
                      <th> {t("Technology.tn")}</th>
                      <th > {t("Age.age")}</th>
                      <th > {t("Salary.slr")}</th>
                      <th >Experience</th>
                      {/* <th> Date of Birth </th>
                      <th > City </th>
                      <th> Collage Name </th>
                      <th > Degree </th>
                       
                      <th > Company Name </th>
                      <th > Mobile Number </th> 
                      <th >
                        Profie
                      </th> */}
                    </tfoot>
                  </table>
                </div>

                <ul className="PagesNumbers">
                  <li>
                    <button onClick={handlePrevbtn}>{t("Previous.pre")}</button>
                  </li>
                  {renderPagesNumbers}

                  <li>
                    <button onClick={handleNextbtn}>{t("Next.nxt")}</button>
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
