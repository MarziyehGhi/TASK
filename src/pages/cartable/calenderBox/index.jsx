import React from "react";
import "../Styles/_base.css";

const CalenderBox = () => {
  return (
    <div className="textarea-box p-4 mt-3">
      <span className="mb-4 massage-text">
        <span className="message-number px-2 me-2">3</span>
        تاریخ ارسال
      </span>
      <div className="form-check my-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label
          className="form-check-label text-secondary"
          for="flexCheckDefault"
        >
          اکنون ارسال شود
        </label>
      </div>
    </div>
  );
};

export default CalenderBox;
