import { Question } from "@/types/questions";
import styles from "./styles.module.css";
import Card from "../Card/Card";

type CardWrapperProps = {
  questions: Question[];
};

const CardWrapper = ({ questions = [] }: CardWrapperProps) => {
  return (
    <div className={styles.main}>
      <div>
        {questions.map((question) => (
          <Card
            id={question.id}
            key={question.id}
            userId={question.userId}
            date={question.date}
            question={question.question}
            name={question.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
