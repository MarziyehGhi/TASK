import { Svgs } from "assets/images/svgs";
import React from "react";
import "./styles/_base.css";
const SearchInput = () => {
  return (
    <>
      <label className="form-label px-2 fw-bold" for="form1">
        جستجو و فیلتر ها
      </label>
      <div className="serach-input d-flex mx-4 my-5">
        <div className="form-outline flex-2">
          <input
            type="search"
            id="form1"
            placeholder="جستجو نام و نام خانوادگی و..."
            className="form-control border-0 rounded-0 bg-transparent"
          />
        </div>
        <button type="button" className="btn  text-end">
          {Svgs.search}
        </button>
      </div>
    </>
  );
};

export default SearchInput;
