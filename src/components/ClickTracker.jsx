import { useEffect, useState } from "react";

const getInitialClicks = () => {
  const savedClicks = window.localStorage.getItem("my-clicks");
  return savedClicks !== null ? JSON.parse(savedClicks) : 0;
};

export default function ClickTracker() {
  const [clicks, setClicks] = useState(getInitialClicks);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    window.localStorage.setItem("my-clicks", JSON.stringify(clicks));
  }, [clicks]);

  useEffect(() => {
    console.log("on mount and on DATE change", date);
  }, [date]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setDate(new Date())}>
        Date: {date.toLocaleTimeString()}
      </button>
    </div>
  );
}
