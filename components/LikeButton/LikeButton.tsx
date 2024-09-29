import React, { useState } from "react";
import styles from "./styles.module.css";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className={styles.likeButton}>
      <button onClick={handleLike}>{isLiked ? "❤️ Liked" : "🤍 Like"}</button>
    </div>
  );
};

export default LikeButton;
