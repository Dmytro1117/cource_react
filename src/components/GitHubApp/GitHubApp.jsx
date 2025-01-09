import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { fetchUser } from "../../services/github-api";
import css from "./GitHubApp.module.css";

export default function GitHubApp() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (values, actions) => {
    try {
      setLoading(true);
      setUser(null);
      setError(false);
      const fetchedUser = await fetchUser(values.username);
      setUser(fetchedUser);
      actions.resetForm();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.container}>
      <h1>HTTP requests in React</h1>

      <Formik initialValues={{ username: "" }} onSubmit={handleSearch}>
        <Form>
          <Field type="text" name="username" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {loading && <b>Loading user data, please wait...</b>}

      {error && <b>Oops there was an error, please try again!!!</b>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.name} width="180" />
          <p>
            <a href={user.html_url}>{user.name}</a>
          </p>
          <p>Followers: {user.followers}</p>
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
}
