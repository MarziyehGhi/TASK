import SelectInput from "components/shared/selectInput";
import React from "react";
import "../Styles/_base.css";

const ContactBox = () => {
  return (
    <div className="textarea-box p-4">
      <span className="mb-4 massage-text">
        <span className="message-number px-2 me-2">2</span>
        مخاطبین
      </span>

      <div className="d-flex pt-4 justify-content-between">
        <SelectInput
          defaultOption="همه موارد"
          options1="test"
          options2="test2"
          selectLabel="مقطع"
        />
        <SelectInput
          defaultOption="همه موارد"
          options1="test"
          options2="test2"
          selectLabel="رشته"
        />
        <SelectInput
          defaultOption="همه موارد"
          options1="test"
          options2="test2"
          selectLabel="ترم"
        />
      </div>
    </div>
  );
};

export default ContactBox;
