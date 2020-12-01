import { useEffect, useState } from "react";
import "./App.css";
import Datatable from "./components/Datatable/Datatable";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import Pagination from "./components/Pagination/Pagination";
import mockData from "./mockdata/MOCK_DATA.json";
function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(20);

  // load the data
  useEffect(() => {
    setData(mockData);
  }, []);

  // set the query state as input value
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // search by headings
  const search = (rows) => {
    const columns = data[0] && Object.keys(data[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  // Get current page data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        <SearchFilter data={data} query={query} onChange={handleChange} />
      </div>
      <div>
        <Pagination
          dataPerPage={dataPerPage}
          data={data.length}
          paginate={paginate}
        />
        <Datatable data={search(currentData)} />
        <Pagination
          dataPerPage={dataPerPage}
          data={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
