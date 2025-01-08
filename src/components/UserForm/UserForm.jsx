import { useId } from "react";
import css from "./UserForm.module.css";

export default function UserForm({ onAdd }) {
  const id = useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd({
      username: event.target.elements.username.value,
      role: event.target.elements.role.value,
    });

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.group}>
        <label htmlFor={`${id}-username`}>Username:</label>
        <input type="text" name="username" id={`${id}-username`} />
      </div>

      <div className={css.group}>
        <label htmlFor={`${id}-role`}>Role:</label>
        <select name="role" id={`${id}-role`}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
