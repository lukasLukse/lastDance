import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const CreateAnswerForm = () => {
  const [name, setName] = useState<string>("");
  const [answerText, setAnswerText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const jwt = cookie.get("questions_app_jwt");

  const addAnswer = async () => {
    if (!name || !answerText) {
      setError("Both fields are required.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const body = {
        name,
        answerText,
      };

      const headers = {
        Authorization: jwt,
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/answers/${router.query.id}`,
        body,
        { headers }
      );

      if (response.status === 201) {
        window.location.reload();
      }
    } catch (err) {
      setError("Failed to submit the answer. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Answer the question:</h1>
      <input
        value={name}
        placeholder="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={answerText}
        placeholder="Your answer?"
        type="text"
        onChange={(e) => setAnswerText(e.target.value)}
      />
      {error && <div className={styles.error}>{error}</div>}
      <Button isLoading={isLoading} title="Submit Answer" onClick={addAnswer} />
    </div>
  );
};

export default CreateAnswerForm;
