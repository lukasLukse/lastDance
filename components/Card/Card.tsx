import styles from "./styles.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type CardProps = {
  id: string;
  name: string;
  userId: string;
  date: string;
  question: string;
};

const Card = ({ id, userId, date, name, question }: CardProps) => {
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem(`likes-${userId}`);
    return savedLikes ? Number(savedLikes) : 0;
  });

  const [dislikes, setDislikes] = useState(() => {
    const savedDislikes = localStorage.getItem(`dislikes-${userId}`);
    return savedDislikes ? Number(savedDislikes) : 0;
  });

  const [userAction, setUserAction] = useState(() => {
    const likedStatus = localStorage.getItem(`userAction-${userId}`);
    return likedStatus ? likedStatus : null;
  });

  const handleLike = () => {
    if (userAction === "like") {
      setLikes((prev) => prev - 1);
      setUserAction(null);
      localStorage.removeItem(`userAction-${userId}`);
    } else if (userAction === "dislike") {
      setDislikes((prev) => prev - 1);
      setLikes((prev) => prev + 1);
      setUserAction("like");
      localStorage.setItem(`userAction-${userId}`, "like");
    } else {
      setLikes((prev) => prev + 1);
      setUserAction("like");
      localStorage.setItem(`userAction-${userId}`, "like");
    }
  };

  const handleDislike = () => {
    if (userAction === "dislike") {
      setDislikes((prev) => prev - 1);
      setUserAction(null);
      localStorage.removeItem(`userAction-${userId}`);
    } else if (userAction === "like") {
      setLikes((prev) => prev - 1);
      setDislikes((prev) => prev + 1);
      setUserAction("dislike");
      localStorage.setItem(`userAction-${userId}`, "dislike");
    } else {
      setDislikes((prev) => prev + 1);
      setUserAction("dislike");
      localStorage.setItem(`userAction-${userId}`, "dislike");
    }
  };

  useEffect(() => {
    localStorage.setItem(`likes-${userId}`, likes.toString());
    localStorage.setItem(`dislikes-${userId}`, dislikes.toString());
  }, [likes, dislikes, userId]);

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
          disabled={userAction === "dislike"}
        >
          👍 {likes}
        </button>
        <button
          onClick={handleDislike}
          className={styles.dislikeButton}
          disabled={userAction === "like"}
        >
          👎 {dislikes}
        </button>
      </div>
    </div>
  );
};

export default Card;
