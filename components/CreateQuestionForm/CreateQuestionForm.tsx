import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import cookie from "js-cookie";
import axios from "axios";

const CreateQuestion = () => {
  const [question, setQuestion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const jwt = cookie.get("questions_app_jwt");

  const addQuestion = async () => {
    if (!question) {
      setError("Question field is required.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const body = {
        userId: jwt ? JSON.parse(atob(jwt.split(".")[1])).userId : null,
        question: question,
      };

      const headers = {
        authorization: jwt,
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/question`,
        body,
        { headers }
      );

      if (response.status === 201) {
        window.location.reload();
      }
    } catch (err) {
      setError("Failed to submit the question. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Ask a question:</h1>
      <input
        value={question}
        placeholder="Your question?"
        type="text"
        onChange={(e) => setQuestion(e.target.value)}
      />
      {error && <div className={styles.error}>{error}</div>}
      <Button
        isLoading={isLoading}
        title="Submit Question"
        onClick={addQuestion}
      />
    </div>
  );
};

export default CreateQuestion;
