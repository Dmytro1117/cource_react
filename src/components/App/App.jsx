import { useState, useEffect } from "react";
import ClickTracker from "../ClickTracker";
import Sidebar from "../Sidebar/Sidebar";
import Reader from "../Reader/Reader";
import articles from "../../articles.json";
import getRandomHexColor from "../../utils/getRandomHexColor";
import css from "./App.module.css";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);

  const [clicks, setClicks] = useState(0);
  // const color = clicks % 5 === 0 ? "orangered" : "skyblue";
  const color = getRandomHexColor();

  useEffect(() => {
    if (clicks === 0) {
      return;
    }
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className={css.container}>
      <h1>Effects in React</h1>
      <button onClick={() => setClicks(clicks + 1)}>Clicks {clicks}</button>

      <ClickTracker />

      <button onClick={openSidebar}>Open sidebar</button>
      {isSidebarOpen && <Sidebar onClose={closeSidebar} />}

      <Reader items={articles} />
    </div>
  );
}
