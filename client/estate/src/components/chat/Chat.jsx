import React from "react"
import "./chat.scss"

function Chat() {
  return (
    <div className="chat">
      <h2>Messages</h2>
      <div className="messages">
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Hello, goodbye.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Hello, goodbye.</p>
        </div>
      </div>
      <div className="chatBox">
        <div className="header">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
          </div>
          <button>X</button>
        </div>
        <div className="content">
          <div className="chatMessage">
            <p>Chào bạn</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>Hi b</p>
            <span>2 hour ago</span>
          </div>
        </div>
        <form className="bottom">
          <textarea></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat
