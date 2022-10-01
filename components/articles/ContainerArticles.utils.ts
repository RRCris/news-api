import { useState } from "react";
import { cardArticle } from "../../types";
import { API_KEY, lg, MAIN_API } from "../../config";

export const useFetchin = (data?: cardArticle[]) => {
  const [articles, setArticles] = useState<cardArticle[]>(data || []);
  function start() {
    fetch(
      MAIN_API + "?q=tesla&from=2022-09-01&sortBy=publishedAt&apiKey=" + API_KEY
    )
      .then((response) => response.json())
      .then((data) => {
        data = apiToCardArticle(data);
        lg("from promise", data);
        setArticles(data);
      });
  }

  return { articles, start };
};

function apiToCardArticle(data: any): cardArticle[] {
  if (!data || !data.articles || !data.articles.length)
    throw new Error("error al recibir la respueta de la api");

  return data.articles.map((art: any) => {
    return {
      title: art.title,
      description: art.description,
      image: art.urlToImage,
      date: art.publishedAt,
    };
  });
}
