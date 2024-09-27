import { Question } from "@/types/questions";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import { Answer } from "@/types/answers";
import MyAnswer from "../MyAnswer/MyAnswer"; // Ensure you import MyAnswer

type CardWrapperProps = {
  questions: Question[];
  answers: Answer[];
};

const CardWrapper = ({ questions = [], answers = [] }: CardWrapperProps) => {
  return (
    <div className={styles.main}>
      <div>
        {questions.map((question) => (
          <Card
            id={question.id}
            key={question.id}
            date={question.date}
            question={question.question}
            name={question.name}
          />
        ))}
      </div>
      <div>
        {answers.map((answer) => (
          <MyAnswer
            id={answer.id}
            key={answer.id}
            name={answer.name}
            date={answer.date}
            answerText={answer.answerText}
          />
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
