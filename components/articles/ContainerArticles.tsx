import { lg } from "../../config";
import { cardArticle } from "../../types";
import { useFetchin } from "./ContainerArticles.utils";

interface Props {
  data?: cardArticle[];
}

export default function ContainerArticles({ data }: Props) {
  const articles = useFetchin(data);
  lg("from component", articles);
  return (
    <>
      <h1>this is my containr of articles</h1>
    </>
  );
}
