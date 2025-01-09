import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import SearchForm from "../SearchForm/SearchForm";
import { fetchArticles } from "../../services/articles-api";
import css from "./App.module.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);

  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getArticles() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchArticles(topic, page);
        console.log(res);
        setArticles((prevState) => [...prevState, ...res.articles]);
        setTotalPages(res.totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getArticles();
  }, [page, topic]);

  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.container}>
      <SearchForm onSearch={handleSearch} />
      {articles.length > 0 && <ArticleList items={articles} />}

      {page >= totalPages && <b>END OF COLLECTION!!!!</b>}

      {error && <b>ERROR!!!</b>}

      {loading && <b>LOADING...</b>}

      {articles.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}
