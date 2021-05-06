import React from "react";
import "../Sass/ToDo.scss";
import img1 from "./takla.jpeg";
import img2 from "./rockey.jpeg";
import img3 from "./img1.jpeg";
import img4 from "./girl.jpeg";
function ToDo() {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body todo-card">
          <div className="d-flex no-block align-items-center">
            <div>
              <h5 class="card-title ">TO DO LIST</h5>
            </div>
            <div className="ml-auto btn-div">
              <button className="btn">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div className="abhi2">

          <div className="user-list-div">
            <input type="checkbox" style={{ marginTop: "10px" }} />

            <div className="todo_list_div2">
              <span className="todo_list_span">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </span>
            </div>

            <span className="badge  logo"> Today</span>
          </div>

          <div className="image-div">
            <img src={img1} alt="user" width="50" />

            <img src={img1} alt="user" width="50" />

            <img src={img1} alt="user" width="50" />

            <img src={img1} alt="user" width="50" />
          </div>

          <div className="user-list-div">
            <input type="checkbox" style={{ marginTop: "10px" }} />

            <div className="todo_list_div2">
              <span className="todo_list_span">
                Lorem Ipsum is simply dummy text of the printing
              </span>
            </div>

            <span className="badge  logo1"> 1 Week</span>
          </div>
          <div className="item-date">26 jun 2017</div>

          <div className="user-list-div">
            <input type="checkbox" style={{ marginTop: "10px" }} />

            <div className="todo_list_div2">
              <span className="todo_list_span">Give Purchase report to</span>
            </div>

            <span className="badge  logo3"> Yesterday</span>
          </div>
          <div className="image-div">
            <img src={img2} alt="user" width="50" />

            <img src={img3} alt="user" width="50" />
          </div>

          <div className="user-list-div">
            <input type="checkbox" style={{ marginTop: "10px" }} />

            <div className="todo_list_div2">
              <span className="todo_list_span">
                Lorem Ipsum is simply dummy text of the printing
              </span>
            </div>

            <span className="badge  logo1"> 1 Week</span>
          </div>
          <div className="item-date">26 jun 2017</div>

          <div className="user-list-div">
            <input type="checkbox" style={{ marginTop: "10px" }} />

            <div className="todo_list_div2">
              <span className="todo_list_span">Give Purchase report to</span>
            </div>

            <span className="badge  logo3"> Yesterday</span>
          </div>
          <div className="image-div">
            <img src={img3} alt="user" width="50" />

            <img src={img4} alt="user" width="50" />
          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ToDo;
