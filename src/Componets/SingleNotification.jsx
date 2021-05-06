import React from 'react'
import "../Sass/Notification.scss";

function SingleNotification(props) {
    return (
        <div className="notification-main-div">
        <div className="notification-div">
          <img
            src={props.image}
            alt="user"
            width="50"
            style={{ borderRadius: "100%"  , marginTop : "10px"}}
          />
          <div class="profile-status"></div>
        </div>

        <div className="notification-content">
          <h5 className="user-name">{props.name}</h5>{" "}
          <span className="mail-desc">
            {props.notification}
          </span>{" "}
          <span className="time">{props.time}</span>{" "}
        </div>
      </div>
    )
}

export default SingleNotification;


