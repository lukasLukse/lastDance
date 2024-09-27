import React, { useState, useEffect } from "react";
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
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem(`likes-${id}`);
    return savedLikes ? Number(savedLikes) : 0;
  });

  const [dislikes, setDislikes] = useState(() => {
    const savedDislikes = localStorage.getItem(`dislikes-${id}`);
    return savedDislikes ? Number(savedDislikes) : 0;
  });

  const [userAction, setUserAction] = useState(() => {
    const likedStatus = localStorage.getItem(`userAction-${id}`);
    return likedStatus ? likedStatus : null;
  });

  const handleLike = () => {
    if (userAction !== "like") {
      setLikes((prev) => prev + 1);
      setUserAction("like");
      localStorage.setItem(`userAction-${id}`, "like");

      if (userAction === "dislike") {
        setDislikes((prev) => prev - 1);
      }
    }
  };

  const handleDislike = () => {
    if (userAction !== "dislike") {
      setDislikes((prev) => prev + 1);
      setUserAction("dislike");
      localStorage.setItem(`userAction-${id}`, "dislike");

      if (userAction === "like") {
        setLikes((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem(`likes-${id}`, likes.toString());
    localStorage.setItem(`dislikes-${id}`, dislikes.toString());
  }, [likes, dislikes, id]);

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
        <button
          onClick={handleLike}
          className={styles.likeButton}
          disabled={userAction === "like"}
        >
          👍 {likes}
        </button>
        <button
          onClick={handleDislike}
          className={styles.dislikeButton}
          disabled={userAction === "dislike"}
        >
          👎 {dislikes}
        </button>
      </div>
    </div>
  );
};

export default PublicQuestionsCard;
