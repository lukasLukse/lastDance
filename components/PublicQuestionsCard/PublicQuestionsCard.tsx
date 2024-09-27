import React, { useState } from "react";
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
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleDislike = () => {
    setDislikes((prev) => prev + 1);
  };

  return (
    <div className={styles.main}>
      <Link className={styles.link} href={`/question/${id}`}>
        <h2>{date}</h2>
        <div className={styles.question}>
          <label className={styles.label}>Question:</label>
          <p>{question}</p>
        </div>
        <div className={styles.postedby}>
          <label className={styles.label}>Posted by:</label>
          <p>{name}</p>
        </div>
      </Link>
      <div className={styles.buttons}>
        <button onClick={handleLike} className={styles.likeButton}>
          👍 {likes}
        </button>
        <button onClick={handleDislike} className={styles.dislikeButton}>
          👎 {dislikes}
        </button>
      </div>
    </div>
  );
};

export default PublicQuestionsCard;
