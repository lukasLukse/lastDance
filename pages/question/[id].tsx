import MyQuestion from "@/components/MyQuestion/MyQuestion";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { Question } from "@/types/questions";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const QuestionPage = () => {
  const [question, setQuestion] = useState<Question | null>(null);

  const router = useRouter();

  const jwt = cookie.get("questions_app_jwt");

  const fetchQuestions = async () => {
    try {
      const headers = {
        authorization: jwt,
      };
      const response = await axios.get(
        `${process.env.SERVER_URL}/questions/${router.query.id}`,
        { headers }
      );

      console.log(response);

      setQuestion(response.data.questions);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchQuestions();
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
          />
        )}
      </div>
    </PageTemplate>
  );
};

export default QuestionPage;
