import React from "react";
import "../Sass/Comment.scss";
import img1 from "./takla.jpeg";
import img2 from "./rockey.jpeg";
import img3 from "./img1.jpeg";
import img4 from "./girl.jpeg";
import SingalComment from "./SingalComment";

function Comment() {
  return (
    <div className="col-sm-12 col-md-6 col-lr-6">
      <div className="card">
        <div className="card-body">
          <h5 className="comment" style={{ fontWeight : "500"}}>Recent Comments</h5>
        </div>
        <div className="card-body comment-section">
          <SingalComment
            profile={img1}
            logo="badge badge-pill badge-info icon"
            name="Jhon Ceena"
            badge_name= "pending"
          />
          <hr />
          <SingalComment
            profile={img2}
            logo="badge badge-pill badge-success icon1"
            name="Gaurang Ghatiya"
            badge_name="Approved"
          />
          <hr />
          <SingalComment
            profile={img3}
            logo="badge badge-pill badge-info icon3"
            name="Abhishek Dubey"
            badge_name="Rejected"
          />
          <hr />
          <SingalComment
            profile={img4}
            logo="badge badge-pill badge-info icon1"
            name="Abhishek Dubey"
            badge_name="Approved"
          />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Comment;
