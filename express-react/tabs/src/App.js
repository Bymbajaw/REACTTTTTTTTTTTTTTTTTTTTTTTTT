import "./App.css";
import { useEffect, useState } from "react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
// import { IconName } from "react-icons/ai";
import { data } from "./data";

function App() {
  const [dt, setDt] = useState(data);
  const [selectedCompany, setSelectedCompany] = useState("");
  const url = "https://course-api.com/react-tabs-project";
  const [info, setInfo] = useState(data[0]);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    // fetch("https://course-api.com/react-tabs-project")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setDt(data);
    //     console.log(data);
    //     setInfo(data[0]);
    //   });
    // setInfo(data[0]);
  }, []);

  useEffect(() => {
    let arr = dt.filter((a) => a.id == selectedCompany);
    setInfo(arr[0]);
  }, [selectedCompany]);

  return (
    <div className="container">
      <h1 className="title">Exprience</h1>
      <div className="job">
        <div className="company-tab">
          {dt.map((a) => {
            return (
              <h4 onClick={() => setSelectedCompany(a.id)}>{a.company}</h4>
            );
          })}
        </div>
        {info && (
          <div className="company-content">
            <h2 className="company-title">{info.title}</h2>
            <p className="company-name">{info.company}</p>
            <p className="date">{info.dates}</p>
            {info?.duties?.map((a, index) => {
              <div className="text">
                {open && selected == index ? (
                  <AiFillCaretRight
                    onClick={() => {
                      console.log(index);
                      setSelected(index);
                      setOpen(false);
                    }}
                  />
                ) : (
                  <AiFillCaretDown
                    onClick={() => {
                      console.log(index);
                      setSelected(index);
                      setOpen(true);
                    }}
                  />
                )}
                <p>
                  <h2>Sub title {index}</h2>
                  {open && selected == index && a}
                </p>
              </div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
