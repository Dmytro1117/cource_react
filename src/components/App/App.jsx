import UserForm from "../UserForm/UserForm";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import css from "./App.module.css";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import OrderForm from "../OrderForm/OrderForm";

export default function App() {
  const [lang, setLang] = useState("en");
  const [text, setText] = useState("");

  const handleLangChange = (newLang) => {
    setLang(newLang);
  };

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const addNewOrder = (newOrder) => {
    console.log(newOrder);
  };

  const addNewUser = (newUser) => {
    console.log(newUser);
  };

  return (
    <div className={css.container}>
      <h1>Forms in React</h1>
      <UserForm onAdd={addNewUser} />

      <OrderForm onOrder={addNewOrder} />

      <TextInput value={text} onUpdate={handleTextChange} />
      <p>{text}</p>

      <LangSwitcher value={lang} onSelect={handleLangChange} />
      <p>Current lang: {lang}</p>
    </div>
  );
}
