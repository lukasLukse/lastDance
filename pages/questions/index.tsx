import { useEffect, useState } from "react";
import axios from "axios";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import styles from "./styles.module.css";
import CardWrapper from "@/components/CardWrapper/CardWrapper";

export default function Home() {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        `${process.env.SERVER_URL}/public/questions`
      );
      setQuestions(response.data.questions);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <PageTemplate>
      <div className={styles.header}>
        {questions.length > 0 ? (
          <>
            <h1>ALL QUESTIONS :</h1>
            <CardWrapper questions={questions} />
          </>
        ) : (
          <h1>No posted questions.</h1>
        )}
      </div>
    </PageTemplate>
  );
}
