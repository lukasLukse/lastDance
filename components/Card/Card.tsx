import styles from "./styles.module.css";
import Link from "next/link";

type CardProps = {
  id: string;
  name: string;
  date: string;
  question: string;
};

const Card = ({ id, date, name, question }: CardProps) => {
  return (
    <Link href={`/question/${id}`} className={styles.main}>
      <h2>{date}</h2>
      <p>{question}</p>
      <p>{name}</p>
    </Link>
  );
};

export default Card;
