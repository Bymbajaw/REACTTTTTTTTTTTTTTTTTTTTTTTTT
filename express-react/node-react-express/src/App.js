import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [word, setWord] = useState();
  //nemeh
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [nemeh, setNemeh] = useState("");
  //hasah
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [hasah, setHasah] = useState("");
  //huwaah
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [huwaah, setHuwaah] = useState("");
  //vrjih
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [vrjih, setVrjih] = useState("");

  //////////
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => {
        console.log(res.data);
        setWord(res.data.result[0].name);
      })
      .catch((err) => console.log(err));
  }, []);

  //nemeh
  const sum = () => {
    let str = `http://localhost:4000/add?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setNemeh(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  //hasah
  const min = () => {
    let str = `http://localhost:4000/add1?c=${c}&d=${d}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setHasah(res.data.value);
      })
      .catch((err) => console.log(err));
  };
  //huwaah
  const huw = () => {
    let str = `http://localhost:4000/add2?e=${e}&f=${f}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setHuwaah(res.data.value);
      })
      .catch((err) => console.log(err));
  };
  //vrjih
  const vrj = () => {
    let str = `http://localhost:4000/add3?g=${g}&h=${h}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setVrjih(res.data.value);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <input type={"text"} value={a} onChange={(e) => setA(e.target.value)} />
        <input type={"text"} value={b} onChange={(e) => setB(e.target.value)} />
        <button onClick={sum}>Нэмэх</button>
        <span>Хариу: {nemeh}</span>
      </div>

      <div>
        <input type={"text"} value={c} onChange={(e) => setC(e.target.value)} />
        <input type={"text"} value={d} onChange={(e) => setD(e.target.value)} />
        <button onClick={min}>Хасах</button>
        <span>Хариу: {hasah}</span>
      </div>

      <div>
        <input type={"text"} value={e} onChange={(e) => setE(e.target.value)} />
        <input type={"text"} value={f} onChange={(e) => setF(e.target.value)} />
        <button onClick={huw}>Хуваах</button>
        <span>Хариу: {huwaah}</span>
      </div>

      <div>
        <input type={"text"} value={g} onChange={(e) => setG(e.target.value)} />
        <input type={"text"} value={h} onChange={(e) => setH(e.target.value)} />
        <button onClick={vrj}>Үржих</button>
        <span>Хариу: {vrjih}</span>
      </div>
      <div>{word}</div>
    </>
  );
}

export default App;
