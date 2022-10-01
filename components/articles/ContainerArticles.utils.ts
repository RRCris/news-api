import { useState } from "react";
import { cardArticle } from "../../types";
import { API_KEY, lg, MAIN_API } from "../../config";

export const useFetchin = (data?: cardArticle[]) => {
  const [articles, setArticles] = useState<cardArticle[]>(data || []);

  fetch(
    MAIN_API + "?q=tesla&from=2022-09-01&sortBy=publishedAt&apiKey=" + API_KEY
  )
    .then((response) => response.json())
    .then((data) => {
      lg("from promise", data);
      setArticles(articles);
    });

  return articles;
};
