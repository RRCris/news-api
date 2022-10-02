import { lg } from "../../config";
import { cardArticle } from "../../types";
import { useFetchin } from "./ContainerArticles.utils";
import styles from "./ContainerArticles.module.css";

interface Props {
  data?: cardArticle[];
}

export default function ContainerArticles({ data }: Props) {
  const { articles, start } = useFetchin(data);

  if (articles.length === 0) start();

  return (
    <div className={styles.ContainerArticles}>
      {articles.length === 0 ? (
        <>
          <h1>i don´t have articles</h1>
        </>
      ) : (
        <>
          {articles.map((art) => (
            <div key={articles.indexOf(art)}>{art.title}</div>
          ))}
        </>
      )}
    </div>
  );
}
