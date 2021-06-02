import React from "react";
import "../Sass/ToDo.scss";
import img1 from "./takla.jpeg";
import img2 from "./rockey.jpeg";
import img3 from "./img1.jpeg";
import img4 from "./girl.jpeg";
import {useTranslation} from "react-i18next";
function ToDo() {
  const { t } = useTranslation();
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body todo-card">
          <div className="d-flex no-block align-items-center">
            <div>
              <h5 class="card-title ">{t('todo.list')}</h5>
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
                {t('msg2.speech')}
              </span>
            </div>

            <span className="badge  logo"> {t('today.day')}</span>
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
                {t('msg3.speech')}
              </span>
            </div>

            <span className="badge  logo1"> 1 {t('week.day')}</span>
          </div>
          <div className="item-date">26 jun 2017</div>

          <div className="user-list-div">
            <input type="checkbox" style={{ marginTop: "10px" }} />

            <div className="todo_list_div2">
              <span className="todo_list_span">{t('msg4.speech')}</span>
            </div>

            <span className="badge  logo3"> {t('Yesterday.day')}</span>
          </div>
          <div className="image-div">
            <img src={img2} alt="user" width="50" />

            <img src={img3} alt="user" width="50" />
          </div>

          <div className="user-list-div">
            <input type="checkbox" style={{ marginTop: "10px" }} />

            <div className="todo_list_div2">
              <span className="todo_list_span">
               {t('msg3.speech')}
              </span>
            </div>

            <span className="badge  logo1"> 1 {t('week.day')}</span>
          </div>
          <div className="item-date">26 jun 2017</div>

          <div className="user-list-div">
            <input type="checkbox" style={{ marginTop: "10px" }} />

            <div className="todo_list_div2">
              <span className="todo_list_span">{t('msg3.speech')}</span>
            </div>

            <span className="badge  logo3"> {t('Yesterday.day')}</span>
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
