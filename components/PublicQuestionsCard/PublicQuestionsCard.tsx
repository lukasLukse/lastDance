import styles from "./styles.module.css";
import Link from "next/link";

type PublicQuestionsCardProps = {
  id: string;
  name: string;
  date: string;
  question: string;
};

const PublicQuestionsCard = ({
  id,
  date,
  name,
  question,
}: PublicQuestionsCardProps) => {
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

export default PublicQuestionsCard;
