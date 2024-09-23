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
      <div className={styles.question}>
        <label className={styles.label}>Question:</label>
        <p>{question}</p>
      </div>
      <div className={styles.postedby}>
        <label className={styles.label}>Posted by :</label>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default Card;
