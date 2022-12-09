import React from "react";
import "../styles/_base.css";

const TabelRows = ({
  userName,
  studentCode,
  nationalCode,
  filed,
  term,
  num,
  avatarPic,
}) => {
  return (
    <tr className="tabel-Row">
      <td>
        <div className="d-flex align-items-center">
          <div className="avatar">
            <img width="100%" height="100%" src={avatarPic} />
          </div>
          <span className="ps-1">{userName}</span>
        </div>
      </td>
      <td>{studentCode}</td>
      <td>{nationalCode}</td>
      <td>{filed}</td>
      <td>{term}</td>
      <td className="last-td-Row">{num}</td>
    </tr>
  );
};

export default TabelRows;
