import React from "react";
import img1 from "./takla.jpeg";
import "../Sass/Chat.scss";
import {useTranslation} from 'react-i18next'
function Chat(props) {
  const { t } = useTranslation();
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex no-block align-items-center">
            <div>
              <h5 class="card-title m-b-0">{t('chat.msg')}</h5>
            </div>
          </div>

          <div className="chat-main-div">
            <div className="chat-componet">
              <div className="chat-div">
                <img
                  src={img1}
                  alt="user"
                  width="50"
                  style={{ borderRadius: "100%", marginTop: "10px" }}
                />
              </div>

              <div className="chat-content">
                <h5 className="user-name">Abhishek Dubey</h5>
                <div className="chat">
                 {t('msg2.speech')}
                </div>

                <div className="chat-time">10:56 am</div>
              </div>
            </div>

            <div className="chat-componet">
              <div className="chat-div">
                <img
                  src={img1}
                  alt="user"
                  width="50"
                  style={{ borderRadius: "100%", marginTop: "10px" }}
                />
              </div>

              <div className="chat-content">
                <h5 className="user-name">Gaurang Ghadiya</h5>
                <div className="chat">{t('work.msg')}</div>

                <div className="chat-time">10:57 am</div>
              </div>
            </div>

            <div className="chat-reply">
              <div className="user-reply">{t('work1.msg')}</div>
            </div>
            <div className="reply-team">10:58 am</div>

            <div className="chat-reply">
              <div className="user-reply">{t('work2.msg')}</div>
            </div>
            <div className="reply-team">10:59 am</div>

            <div className="chat-componet">
              <div className="chat-div">
                <img
                  src={img1}
                  alt="user"
                  width="50"
                  style={{ borderRadius: "100%", marginTop: "10px" }}
                />
              </div>

              <div className="chat-content">
                <h5 className="user-name">Gaurang Ghadiya</h5>
                <div className="chat">
                {t('work3.msg')}
                </div>

                <div className="chat-time">11:00 am</div>
              </div>
            </div>

            <div className="card-border">

              <div className="write-chat">
                <textarea className="text-area-content" placeholder={t('work4.msg')}></textarea>
              </div>

              <div className="send-btn-div">
                <button className="send-btn">
                <i class="fa fa-paper-plane"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
