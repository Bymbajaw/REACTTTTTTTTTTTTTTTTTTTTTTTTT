import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { data } from "./data";

function App() {
  const [apiData, setApiData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  //

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setApiData(response.data);
    });
  }, []);




  //   useEffect(() => {
  //   let arr = apiData.filter((a) = a.id == searchInput)
    
  //   });
  // }, []);




  //////

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = apiData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(apiData);
    }
  };

  return (
    <div className="container">
      <div>
        <input
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <div>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.email}</p>
                </div>
              );
            })
          : apiData.map((item) => {
              return (
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.email}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
