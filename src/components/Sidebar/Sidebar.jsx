/**
 * - Додати обратник keydown при монтуванні
 * - Закривати по Escape
 * - Розібрати чому реєструється два слухача (Strict Mode)
 * - Очистити слухач при розмонтуванні
 */

// mount > unmount > mount
// mount > effect > addListener > unmount > mount > effect > addListener
// 2 addListener

import { useEffect } from "react";
import css from "./Sidebar.module.css";

export default function Sidebar({ onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  // useEffect(() => {
  //   console.log("mount");

  //   return () => {
  //     console.log("cleanup");
  //   };
  // }, []);

  return (
    <div className={css.wrapper}>
      <button onClick={onClose}>Close</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        voluptatum culpa modi? Quaerat repellat sit error officia dolore?
        Suscipit nisi aliquam voluptates accusamus repellat illo expedita
        necessitatibus laudantium animi quo?
      </p>
    </div>
  );
}
