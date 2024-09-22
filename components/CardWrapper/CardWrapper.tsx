import { Question } from "@/types/questions";
import styles from "./styles.module.css";
import Card from "../Card/Card";

type CardWrapperProps = {
  questions: Question[];
};

const CardWrapper = ({ questions = [] }: CardWrapperProps) => {
  return (
    <div className={styles.main}>
      {questions.map((question) => {
        return (
          <Card
            id={question.id}
            key={question.id}
            date={question.date}
            question={question.question}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;
