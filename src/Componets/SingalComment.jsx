import React from "react";

import "../Sass/Comment.scss";
function SingalComment(props) {
  return (
    <div class="d-flex no-block comment-row comment-main-div">
      <div class="p-2">
        <span class="round">
          <img
            src={props.profile}
            alt="user"
            width="50"
            style={{ borderRadius: "100%" }}
          />
        </span>
      </div>
      <div class="comment-text w-100">
        <h5 className="font-medium" style={{ fontWeight: "700" }}>
          {props.name}
        </h5>
        <p class="m-b-10 text-muted">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the
          printing and type setting industry.
        </p>
        <div className="comment-footer">
          <span class="text-muted ">April 14, 2016</span>{" "}
          <span className={props.logo}>{props.badge_name}</span>{" "}
          <span className="action-icons">
            <i className="fa fa-edit edit-icon"></i> 
            <i class="fa fa-check check-icon"></i>
            <i className="fa fa-heart-o heart-icon" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingalComment;
