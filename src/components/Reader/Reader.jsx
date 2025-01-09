import { useState } from "react";
import Controls from "./Controls";
import Progres from "./Progres";
import Items from "./Itemms";
import css from "./Reder.module.css";

export default function Reader({ items }) {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  const currentItem = items[index];
  const isFirst = index === 0;
  const isLast = index === items.length - 1;
  const totalItems = items.length;

  return (
    <div>
      <header className={css.header}>
        {/* <div>
          <button onClick={handlePrev} disabled={isFirst}>
            Prev
          </button>
          <button onClick={handleNext} disabled={isLast}>
            Next
          </button>
        </div> */}
        <Controls
          handlePrev={handlePrev}
          handleNext={handleNext}
          isFirst={isFirst}
          isLast={isLast}
        />
        <Progres index={index} totalItems={totalItems} />
        {/* <p>
          {index + 1}/{items.length}
        </p> */}
      </header>
      <Items currentItem={currentItem}></Items>
      {/* <article>
        <h2>{currentItem.topic}</h2>
        <p>{currentItem.text}</p>
      </article> */}
    </div>
  );
}
