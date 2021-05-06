import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div class="d-flex no-block align-items-center">
              <div>
                <h3 className="card-h3-icon">
                  <i class={props.icon} aria-hidden="true"></i>
                </h3>

                <p className="card-icon-name">{props.title}</p>
              </div>

              <div
                className="ml-auto"
                style={{ color : props.fontColor, marginLeft: "auto" }}
              >
                <h3 style={{ marginLeft: "auto", fontSize: "30px"  }}>
                  {props.number}
                </h3>
              </div>
            </div>

            <div className="col-12">
              <div className="progress" style={{ height: "7px" }}>
                <div
                  className="progress-bar"
                  style={{
                    width: "85%",
                    height: "7px",
                    backgroundColor: props.fontColor,
                  }}
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
