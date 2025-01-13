import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "modern-normalize";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function MyC() {
//   const [values, setValues] = useState({ a: 1, b: 2 });

//   const changeValue = (key) => {
//     setValues({
//       ...values,
//       [key]: values[key] + 1,
//     });
//   }

//   return (
//     <div>
//       <button onClick={() => changeValue("a")}>A</button>
//       <button onClick={() => changeValue('b')}>B</button>
//     </div>
//   );
// }
