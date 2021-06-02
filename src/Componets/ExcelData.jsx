import React, { useState, useRef, useEffect } from "react";
import "../Sass/ExcelCom.scss";
import * as XLSX from "xlsx";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
// import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import ReactToPdf from "react-to-pdf";
import search from "./search.png";
import jsPDF from 'jspdf'
import "jspdf-autotable"


function ExcelData() {
  const [Data, setData] = useState([]);
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [tech, settech] = useState();
  const [age, setage] = useState();
  const [salary, setsalary] = useState();
  const [exp, setExp] = useState();
  const [isChecked, setisChecked] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");
  console.log(Data);
  const componentRef = useRef();

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d);
      setData(d);
    });
  };

  console.log("Data is", Data);

  ////////////////////// search function ///////////////////////////

  const onInputChange = (value) => {
    setsearchTerm(value);
  };

  let search_data = Data.filter((val) => {
    if (searchTerm == "") return val;
    else if (val.FirstName.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
    else if (val.LastName.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
    else if (val.Technology.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
  });
  console.log(search_data);

  //////////////// Add Function //////////////

  const saveData = (e) => {
    console.log("event is ", e.target.id);

    if (isChecked === false) {
      setisChecked(true);
      let temp = [...Data];
      console.log("temp value is ", temp);
      console.log("Data is", fname, lname, tech, age, salary, exp);
      temp.push({
        "Sr No": Math.random(),
        FirstName: fname,
        LastName: lname,
        Technology: tech,
        Age: age,
        Salary: salary,
        Experience: exp,
      });
      setData(temp);
      console.log(Data);
      setfname("");
      setlname("");
      settech("");
      setage("");
      setsalary("");
      setExp("");
    } else {
      setisChecked(false);
    }
  };

  /////////////////Delete Function ////////////////////////

  const deleteRow = (index) => {

    if(window.confirm("Are you sure to delete this record")){
      let temp = [...Data];
      temp.splice(index, 1);
      setData(temp);
    }
   
  };


  const exportPDF = () =>{
    // const doc = new jsPDF()
    // doc.autoTable({ html: '#mytable' })
    // doc.save('table.pdf')


    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["FirstName" , "LastName" , "Technology" , "Age" , "Salary" , "Experience"]];

    const data = Data.map(elt=> [elt.FirstName, elt.LastName,  elt.Technology, elt.Age ,  elt.Salary , elt.Experience]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")

  }

  return (
    <div id="main1">
      <div className="row">
        <div className="col-md-12">
          <div className="card table-card">
            <div className="card-body">
              <h4 className="card-title">Sample Excel Sheet</h4>

              <div className="excel-import-div">
                <div className="input-file-div">
                  <input
                    id="excel_file"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      readExcel(file);
                    }}
                  />
                </div>
                
        
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
                <div className="buttons-div">
                  {/* <button
                    className=" btn btn-primary exl-btn"
                    // onClick={handleAddRow}
                  >
                    Add Row
                  </button> */}

                  <ReactHTMLTableToExcel
                    id="btn1"
                    className=" btn btn-primary exl-btn"
                    table="exceltable"
                    filename="exceldata"
                    sheet="tablexls"
                    buttonText="Download Excel File"
                  />
                  {/* <button className=" btn btn-primary exl-btn">
                   
                  </button> */}

                  {/* <ReactToPdf
                    targetRef={componentRef}
                    filename="div-blue.pdf"
                    // options={options}
                    x={0.1}
                    y={0.1}
                    scale={0.8}
                  >
                    {({ toPdf }) => (
                      <button
                        onClick={toPdf}
                        className="btn btn-primary exl-btn"
                      >
                        PDF
                      </button>
                    )}
                  </ReactToPdf> */}
                   <button className=" btn btn-primary exl-btn" onClick={exportPDF}>
                     PDF
                   </button>
                </div>
              </div>

              <div className="search-div">
                <label>Search :</label>
                <input
                  type="search"
                  name="search"
                  placeholder="Search.."
                  value={searchTerm}
                  onChange={(event) => {
                    onInputChange(event.target.value);
                  }}
                />
              </div>

              <div class="table-responsive container-fluid table-div">
                <table class="table table-bordered" ref={componentRef} id="mytable">
                  <thead>
                    <tr>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Technology</th>
                      <th>Age</th>
                      <th>Salary</th>
                      <th>Experience</th>
                      <th>Action</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {search_data.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td className="text-warning">{value.FirstName}</td>
                          <td>{value.LastName}</td>
                          <td>
                            <span class="text-muted">{value.Technology}</span>{" "}
                          </td>
                          <td>{value.Age}</td>
                          <td>
                            <div class="label label-table label-success">
                              {value.Salary}
                            </div>
                          </td>
                          <td>{value.Experience}</td>
                          <td>
                          <i
                          type="button"
                          class="fa fa-trash"
                          aria-hidden="true"
                          onClick={() => {
                            deleteRow(index);
                          }}
                         
                      
                          />
                          </td>
                        </tr>
                      );
                    })}

                    <tr>
                      <td>
                        <input
                          id="text1"
                          type="text"
                          placeholder="Enter First Name..."
                          value={fname}
                          onChange={(e) => {
                            setfname(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          id="text2"
                          type="text"
                          placeholder="Enter Last Name..."
                          value={lname}
                          onChange={(e) => {
                            setlname(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          id="text3"
                          type="text"
                          placeholder="Enter Technology..."
                          value={tech}
                          onChange={(e) => {
                            settech(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          id="text4"
                          type="text"
                          placeholder="Enter Age..."
                          value={age}
                          onChange={(e) => {
                            setage(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          id="text5"
                          type="text"
                          placeholder="Enter Salary..."
                          value={salary}
                          onChange={(e) => {
                            setsalary(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          id="text6"
                          type="text"
                          value={exp}
                          placeholder="Enter Experience..."
                          onChange={(e) => {
                            setExp(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          id="add"
                          checked={isChecked}
                          type="checkbox"
                          onChange={saveData}
                        />
                        <label for="save" className="lebalname">
                          Save Data
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExcelData;
