import { cardArticle } from "../../types";
import Image from "next/image";
interface Props {
  data: cardArticle;
}

export default function CardArticle({ data }: Props) {
  if (!data) throw new Error("cardArticle sin props");
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Image src={data.image} />
    </>
  );
}
