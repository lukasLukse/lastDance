import styles from "./styles.module.css";
import Link from "next/link";

type CardProps = {
  id: string;
  date: string;
  question: string;
};

const Card = ({ id, date, question }: CardProps) => {
  return (
    <Link href={`/questions/${id}`} className={styles.main}>
      <h2>{date}</h2>
      <p>{question}</p>
    </Link>
  );
};

export default Card;
