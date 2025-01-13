/**
 * - Створення та ініціалізація
 * - Зберігання посилання на елемент
 * - Життєвий цикл рефа
 *  - Ініціалізація при монтуванні
 *  - Доступ в ефектах і функціях
 * - Зберігання значень між оновленнями компонента
 *  - Відсутність реактивності
 */

import { useRef, useState } from "react";

export default function RefBasics() {
  const [clicks, setClicks] = useState(0);
  const valueRef = useRef(11);

  // console.log("rerender components");

  const handleValueChange = () => {
    valueRef.current += 1;
    console.log(valueRef.current);
  };

  const handleChangeClicks = () => {
    setClicks(clicks + 1);
    console.log("rerender components but valueRef no change", valueRef.current);
  };
  //
  return (
    <div>
      <h2>Ref basics</h2>

      <button onClick={handleValueChange}>Ref clicks</button>
      <button onClick={handleChangeClicks}>State clicks: {clicks}</button>
    </div>
  );
}
