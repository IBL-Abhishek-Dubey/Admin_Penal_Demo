import React from "react";
import img1 from "./takla.jpeg";
import "../Sass/Chat.scss";
function Chat(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex no-block align-items-center">
            <div>
              <h5 class="card-title m-b-0">Chat</h5>
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
                  Lorem Ipsum is simply dummy text of the printing & type
                  setting industry.
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
                <div className="chat">It’s Great opportunity to work.</div>

                <div className="chat-time">10:57 am</div>
              </div>
            </div>

            <div className="chat-reply">
              <div className="user-reply">I would love to join the team.</div>
            </div>
            <div className="reply-team">10:58 am</div>

            <div className="chat-reply">
              <div className="user-reply">Whats budget of the new project.</div>
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
                  Well we have good budget for the project
                </div>

                <div className="chat-time">11:00 am</div>
              </div>
            </div>

            <div className="card-border">

              <div className="write-chat">
                <textarea className="text-area-content" placeholder="Type your message here"></textarea>
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
