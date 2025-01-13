import { useEffect, useState } from "react";
import css from "./Reder.module.css";

const getInitialIndex = () => {
  const savedIndex = window.localStorage.getItem("article-idx");
  return savedIndex !== null ? JSON.parse(savedIndex) : 0;
};

export default function Reader({ items }) {
  const [index, setIndex] = useState(getInitialIndex);

  useEffect(() => {
    window.localStorage.setItem("article-idx", JSON.stringify(index));
  }, [index]);

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  const currentItem = items[index];
  const isFirst = index === 0;
  const isLast = index === items.length - 1;

  return (
    <div>
      <header className={css.header}>
        <div>
          <button onClick={handlePrev} disabled={isFirst}>
            Prev
          </button>
          <button onClick={handleNext} disabled={isLast}>
            Next
          </button>
        </div>
        <p>
          {index + 1}/{items.length}
        </p>
      </header>

      <article>
        <h2>{currentItem.topic}</h2>
        <p>{currentItem.text}</p>
      </article>
    </div>
  );
}
