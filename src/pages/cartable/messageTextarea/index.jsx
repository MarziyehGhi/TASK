import React from "react";
import "../Styles/_base.css";

const MessageTextarea = () => {
  return (
    <div className="textarea-box p-4">
      <div className="d-flex flex-column">
        <span className="mb-4 massage-text">
          <span className="message-number px-2 me-2">1</span>
          متن پیام
        </span>
        <textarea
          className="p-3 textarea-message"
          rows={10}
          placeholder="متن پیام خود را اینجا وارد کنید"
        />
      </div>
    </div>
  );
};

export default MessageTextarea;
