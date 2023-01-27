import "./App.css";
import { useEffect, useState } from "react";
import { data } from "./data";

function App() {
  const [dt, setDt] = useState(data);
  const [info, setInfo] = useState(data[0]);

  // const [search, setSearch] = useState("")
  // const [searchResult, setSearchResult] = useState(data)

  // const handleChange = (e) =>{
  //   setSearch(e.target.value);
  // }

  // useEffect(()=> {
  //   const result = dt.filter(food => food.toLowerCase().includes(search));
  //   setSearchResult(result);
  // },[search]);
  // console.log(searchResult);

  useEffect(() => {
    let arr = dt.filter((a) => a.id);
    setInfo(arr);
  }, []);
  // console.log(setInfo);
  // console.log(dt);

  return (
    <div className="container">
      <div className="row d-flex search col-4">
        <input type="text"
          // onChange={handleChange} 
          // value={search} 
          className="col-10" 
          placeholder="Search...">
         </input>
        <i className="bi bi-search col-2 icon"></i>
      </div>
      <div>
      {/* {searchResult.map(food=>(
                  <div>{food}</div>
                ))} */}
        {dt.map((a) => {
          return (
            <>
              <div>
                <h5>{a.title}</h5>
              </div>
              <div className="row d-flex ">
                <div className="col-4">{a.food}</div>
                <div className="col-4">{a.stock}</div>
                <div className="col-4">{a.price}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
