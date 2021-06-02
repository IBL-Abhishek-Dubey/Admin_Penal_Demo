import React from "react";
import "../Sass/Comment.scss";
import img1 from "./takla.jpeg";
import img2 from "./rockey.jpeg";
import img3 from "./img1.jpeg";
import img4 from "./girl.jpeg";
import SingalComment from "./SingalComment";
import {useTranslation} from "react-i18next"

function Comment() {
  const { t } = useTranslation();
  return (
    <div className="col-sm-12 col-md-6 col-lr-6">
      <div className="card">
        <div className="card-body">
          <h5 className="comment" style={{ fontWeight : "500"}}>{t('comment.cmt')}</h5>
        </div>
        <div className="card-body comment-section">
          <SingalComment
            profile={img1}
            logo="badge badge-pill badge-info icon"
            name="Jhon Ceena"
            badge_name= {t('pending.pending_key')}
          />
          <hr />
          <SingalComment
            profile={img2}
            logo="badge badge-pill badge-success icon1"
            name="Gaurang Ghatiya"
            badge_name={t('approved.approve_key')}
          />
          <hr />
          <SingalComment
            profile={img3}
            logo="badge badge-pill badge-info icon3"
            name="Abhishek Dubey"
            badge_name={t('rejected.reject_key')}
          />
          <hr />
          <SingalComment
            profile={img4}
            logo="badge badge-pill badge-info icon1"
            name="Abhishek Dubey"
            badge_name={t('approved.approve_key')}
          />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Comment;
