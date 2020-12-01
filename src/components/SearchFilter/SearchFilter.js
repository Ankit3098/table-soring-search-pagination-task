import React from "react";
import "./searchFilter.css";

function SearchFilter({ data, query, onChange }) {
  return (
    <div className="form__inputs">
      <label className="form__lable">Search : </label>
      <input
        className="form__input"
        type="text"
        value={query}
        onChange={onChange}
        placeholder="Search with all keywords..."
      />
    </div>
  );
}

export default SearchFilter;
