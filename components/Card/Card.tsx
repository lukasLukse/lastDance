import styles from "./styles.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import LikeButton from "../LikeButton/LikeButton";

type CardProps = {
  id: string;
  name: string;
  date: string;
  question: string;
};

const Card = ({ id, date, name, question }: CardProps) => {
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
      <LikeButton></LikeButton>
    </div>
  );
};

export default Card;
