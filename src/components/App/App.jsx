import { useState } from "react";
import ClicksTracker from "../ClicksTracker/ClicksTracker";
import Toggler from "../Toggler/Toggler";
import Reader from "../Reader/Reader";
import articles from "../../articles.json";
import css from "./App.module.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [values, setValues] = useState({
    a: 1,
    b: 2,
    c: 3,
  });

  const updateValues = () => {
    setValues({
      ...values,
      b: 5,
    });
  };

  const udpateClicks = () => {
    setClicks(clicks + 1);
  };

  const resetClicks = () => {
    setClicks(0);
  };

  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <hr />
      <Reader items={articles} />
      <hr />
      <button onClick={updateValues}>
        Update values {values.a + values.b + values.c}
      </button>
      <hr />
      <Toggler>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          ratione architecto voluptas illum eaque quae natus quidem illo
          perferendis, quia tempore deserunt animi vero? Assumenda ipsam
          cupiditate odit illo soluta?
        </p>
      </Toggler>

      <Toggler>
        <h2>Omagad</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo
          vitae officiis perferendis quod nisi amet architecto nam, non magnam.
        </p>
      </Toggler>

      <hr />
      <ClicksTracker value={clicks} onUpdate={udpateClicks} />
      <ClicksTracker value={clicks} onUpdate={udpateClicks} />
      <button onClick={resetClicks}>Reset clicks</button>
      <hr />
    </div>
  );
}
