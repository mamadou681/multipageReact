import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../Hook/useFetch";

export default function Article() {
  const { id } = useParams();
  const history = useHistory();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, isPending, error } = useFetch(url);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }
  }, [error, history]);
  return (
    <div>
      {isPending && <div>Loading</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h3>{article.title}</h3>
          <p>by {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
