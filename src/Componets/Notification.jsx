import React from "react";
import img1 from "./takla.jpeg";
import yash from "./yash.jpeg";
import img2 from "./rockey.jpeg";
import img3 from "./img1.jpeg";
import img4 from "./girl.jpeg";
import "../Sass/Notification.scss";
import SingleNotification from "./SingleNotification";
import {useTranslation} from "react-i18next"
function Notification() {
  const { t } = useTranslation();
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex no-block align-items-center">
            <div>
              <h5 class="card-title">{t('noti.msg')}</h5>
            </div>
          </div>
        <div className="abhi">
        <SingleNotification
            image={img1}
            name="Noor Ahamed Natali"
            notification={t('msg2.speech')}
            time ="9:30 AM"
          />
          <hr />

          <SingleNotification
            image={yash}
            name="Yash"
            notification={t('gmmsg.gm')}
            time ="10:30 AM"
          />
          <hr />

          <SingleNotification
            image={img2}
            name="Bhautik Domadiya"
            notification={t('gm.msg')}
            time ="12:30 AM"
          />
          <hr/>
           <SingleNotification
            image={img3}
            name="Ghaurang Ghadiya"
            notification={t('code_msg.code')}
            time ="12:30 AM"
          /> <hr/>
           <SingleNotification
            image={img4}
            name="Steave Jobs"
            notification="Iphome Owner"
            time ="12:30 AM"
          />
          <hr />
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default Notification;
