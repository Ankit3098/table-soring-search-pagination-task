import React, { useState } from "react";
import "./datatable.css";

function Datatable({ data }) {
  const [sortedData, setSortedData] = useState([]);
  const [direction, setDirection] = useState("asc");

  //   Sorting By Age
  const sortBy = (columnName) => {
    const sortingData =
      direction === "asc"
        ? data.sort((a, b) => a[columnName] - b[columnName])
        : data.sort((a, b) => b[columnName] - a[columnName]);
    setDirection(direction === "asc" ? "desc" : "asc");
    setSortedData(sortingData);
  };
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table>
      <thead cellPadding={0} cellSpacing={0}>
        <tr>
          {data[0] &&
            columns.map((heading, index) => (
              <th onClick={() => sortBy("age")} key={index}>
                {heading}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column, index) => {
                return <td key={index}>{row[column]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Datatable;
