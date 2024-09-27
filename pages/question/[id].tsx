import MyQuestion from "@/components/MyQuestion/MyQuestion";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { Question } from "@/types/questions";
import { Answer } from "@/types/answers";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MyAnswer from "@/components/MyAnswer/MyAnswer";
import CreateAnswerForm from "@/components/CreateAnswerForm/CreateAnswerForm";

const QuestionPage = () => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const router = useRouter();
  const jwt = cookie.get("questions_app_jwt");

  const fetchQuestion = async () => {
    try {
      const headers = {
        authorization: jwt,
      };
      const response = await axios.get(
        `${process.env.SERVER_URL}/questions/${router.query.id}`,
        { headers }
      );

      setQuestion(response.data.questions);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching question:", err);
    }
  };

  const fetchAnswers = async () => {
    try {
      const headers = {
        authorization: jwt,
      };
      const response = await axios.get(
        `${process.env.SERVER_URL}/question/${router.query.id}/answers`,
        { headers }
      );

      console.log(response.data);
      setAnswers(response.data.answers);
    } catch (err) {
      console.error("Error fetching answers:", err);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchQuestion();
      fetchAnswers();
    }
  }, [router.query.id]);

  return (
    <PageTemplate>
      <div>
        {question && (
          <MyQuestion
            id={question.id}
            name={question.name}
            date={question.date}
            question={question.question}
            userId={question.userId}
          />
        )}
      </div>
      <div>
        <CreateAnswerForm />
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
    </PageTemplate>
  );
};

export default QuestionPage;
