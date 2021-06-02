import React, { useState, useRef, useEffect } from "react";
import "../Sass/ExcelCom.scss";
import * as XLSX from "xlsx";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import ReactToPdf from "react-to-pdf";

function ExcelComponent() {
  const [items, setItems] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [isEditable, setisEditable] = useState(false);
  const [value, setValue] = useState(null);
  const options = {
    orientation: "landscape",
    unit: "in",
  };

  const componentRef = useRef();
  const inputEl = useRef();

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
      setItems(d);
    });
  };


  /// search
  const onInputChange = (value) => {
    setsearchTerm(value);
  };

  let search_data = items.filter((val) => {
    if (searchTerm == "") return val;
    else if (val.FirstName.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
    else if (val.LastName.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
    else if (val.Technology.toLowerCase().includes(searchTerm.toLowerCase()))
      return val;
  }); 
  console.log(search_data);

  const handleAddRow = () => {
    const row = {
      FirstName: "add first name",
      LastName: "add last name ",
      Technology: "Technology add",
      Age: "add age",
      Salary: "add salary ",
      Experience: "add exp",
    };
    console.log(items);
    // setrows(...items , row)
    setItems([...items, row]);
    console.log("updated state is", items);
  };

  console.log(items);

  //  const onFocus = () =>{
  //    setisEditable("true")
  //     inputtext.current.focus()
  //    console.log("false is updated is " , isEditable);
  //  }

  //  const handleChange = (e) =>{
  //   console.log(e.target.value);

  //  }

  const showTextbox = (id, name) => {
    console.log(id);
    console.log("selected filed is", name);
    setisEditable(true);
    
    setValue(name);
    // console.log("update status is", isEditable.status);
    // console.log("id is ", isEditable.rowKey);
    // console.log("updated name is , ", value);
  };

  useEffect(() => {
    console.log("id is ", isEditable.rowKey);
    console.log("status is", isEditable.status);
    console.log("updated name is , ", value);
  }, [isEditable.status, isEditable.rowKey, value]);

  const onBlur = () => {
    setisEditable(false);

    console.log("onblure is", isEditable);
  };

  const handleChange = (e, index) => {
    let temp = [...items];
    console.log("id is", index);
    console.log("item od index", items[index].FirstName);
    temp[index].FirstName = e.target.value;
    setItems(temp);

    // console.log("wrting value ", e.target.value);
  };

  const handleLastName = (e, index) => {
    let temp = [...items];
    console.log("id is", index);
    console.log("item od index", items[index].LastName);
    temp[index].LastName = e.target.value;
    setItems(temp);

    // console.log("wrting value ", e.target.value);
  };

  const handleTechnology = (e, index) => {
    let temp = [...items];
    console.log("id is", index);
    console.log("item od index", items[index].Technology);
    temp[index].Technology = e.target.value;
    setItems(temp);

    // console.log("wrting value ", e.target.value);
  };
  const handleAge = (e, index) => {
    let temp = [...items];
    console.log("id is", index);
    console.log("item od index", items[index].Age);
    temp[index].Age = e.target.value;
    setItems(temp);

    // console.log("wrting value ", e.target.value);
  };

  const handleSalary = (e, index) => {
    let temp = [...items];
    console.log("id is", index);
    console.log("item od index", items[index].Salary);
    temp[index].Salary = e.target.value;
    setItems(temp);

    // console.log("wrting value ", e.target.value);
  };

  const handleExp = (e, index) => {
    let temp = [...items];
    console.log("id is", index);
    console.log("item od index", items[index].Experience);
    temp[index].Experience = e.target.value;
    setItems(temp);

    // console.log("wrting value ", e.target.value);
  };

  console.log("final log of paticular table data ", items);

  const deleteRow = (index) => {
    let temp = [...items];
    temp.splice(index, 1);
    setItems(temp);
  };

  const submit = (index) => {
    confirmAlert({
      title: "Delete Excel Table Data",
      message: "Are you sure you want to delete this record  ",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteRow(index),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
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

                <div className="buttons-div">
                  <button
                    className=" btn btn-primary exl-btn"
                    onClick={handleAddRow}
                  >
                    Add Row
                  </button>

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
                        className="btn btn-primary exl-btn"
                      >
                        Add PDF File
                      </button>
                    )}
                  </ReactToPdf>
                </div>
              </div>

              <div className="search-filed">
                <div className="input-div">
                  <label>Search </label>
                  <input
                     class="form-control form-control-sm search-input"
                    
                    type="search"
                    value={searchTerm}
                    onChange={(event) => {
                      onInputChange(event.target.value);
                     
                    }}
                  />
                </div>
              </div>

              {/* <div className="dataTables_filter">
                    <label>Search :</label>
                    <input
                      type="search"
                      class="form-control form-control-sm search-input"
                      placeholder=""
                      // value={searchTerm}
                      onChange={(event) => {
                        // onInputChange(event.target.value);
                        // setsearchTerm();
                        // setcurrentPage(1);
                      }}
                    />
                  </div> */}

              <table
                class="table container"
                id="exceltable"
                ref={componentRef}
                style={{ marginTop: "50px" }}
              >
                <thead>
                  <tr>
                    <th scope="col">First_Name</th>
                    <th scope="col">Last_Name</th>
                    <th scope="col">Technology</th>
                    <th scope="col">Age</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log("status is " , isEditable.status)}
                  {console.log("id is in table " , isEditable.rowKey)}
                  {search_data.map((d, index) => (
                    <tr key={index + 1}>
                      {isEditable ? (
                        <td>
                          <input
                           ref={inputEl}
                            type="text"
                            value={d.FirstName}
                            onBlur={onBlur}
                            onChange={(e) => {
                              handleChange(e, index);
                            }}
                          />
                        </td>
                      ) : (
                        <td onClick={() => showTextbox(index, d.FirstName)}>
                          {d.FirstName}
                        </td>
                      )}

                      {isEditable.status && isEditable.rowKey === index ? (
                        <td>
                          <input
                            type="text"
                            value={d.LastName}
                            onBlur={onBlur}
                            onChange={(e) => {
                              handleLastName(e, index);
                            }}
                          />
                        </td>
                      ) : (
                        <td onClick={() => showTextbox(index)}>{d.LastName}</td>
                      )}

                      {isEditable.status && isEditable.rowKey === index ? (
                        <td>
                          <input
                            type="text"
                            value={d.Technology}
                            onBlur={onBlur}
                            onChange={(e) => {
                              handleTechnology(e, index);
                            }}
                          />
                        </td>
                      ) : (
                        <td onClick={() => showTextbox(index)}>
                          {d.Technology}
                        </td>
                      )}

                      {isEditable.status && isEditable.rowKey === index ? (
                        <td>
                          <input
                            type="text"
                            value={d.Age}
                            onBlur={onBlur}
                            onChange={(e) => {
                              handleAge(e, index);
                            }}
                          />
                        </td>
                      ) : (
                        <td onClick={() => showTextbox(index)}>{d.Age}</td>
                      )}

                      {isEditable.status && isEditable.rowKey === index ? (
                        <td>
                          <input
                            type="text"
                            value={d.Salary}
                            onBlur={onBlur}
                            onChange={(e) => {
                              handleSalary(e, index);
                            }}
                          />
                        </td>
                      ) : (
                        <td onClick={() => showTextbox(index)}>{d.Salary}</td>
                      )}

                      {isEditable.status && isEditable.rowKey === index ? (
                        <td>
                          <input
                            type="text"
                            value={d.Experience}
                            onBlur={onBlur}
                            onChange={(e) => {
                              handleExp(e, index);
                            }}
                          />
                        </td>
                      ) : (
                        <td onClick={() => showTextbox(index)}>
                          {d.Experience}
                        </td>
                      )}
                      <td>
                        <i
                          class="fa fa-trash"
                          aria-hidden="true"
                          // onClick={() => {
                          //   deleteRow(index);
                          // }}
                          onClick={() => {
                            submit(index);
                          }}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExcelComponent;
