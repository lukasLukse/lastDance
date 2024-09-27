import { Question } from "@/types/questions";
import styles from "./styles.module.css";
import PublicQuestionsCard from "../PublicQuestionsCard/PublicQuestionsCard";

type CardWrapperProps = {
  questions: Question[];
};

const PublicQuestions = ({ questions = [] }: CardWrapperProps) => {
  return (
    <div className={styles.main}>
      {questions.map((question) => (
        <PublicQuestionsCard
          id={question.id}
          key={question.id}
          date={question.date}
          question={question.question}
          name={question.name}
        />
      ))}
    </div>
  );
};

export default PublicQuestions;
