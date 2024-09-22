import { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import CardWrapper from "../components/CardWrapper/CardWrapper";
import { Question } from "@/types/questions";
import { useRouter } from "next/router";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

export default function Home() {
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);

  const jwt = cookie.get("questions_app_jwt");

  const fetchQuestions = async () => {
    try {
      const headers = {
        authorization: jwt,
      };
      const response = await axios.get(`${process.env.SERVER_URL}/questions`, {
        headers,
      });

      setQuestions(response.data.questions);
      console.log(response.data.question);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!jwt) {
      router.push("/signup");
    }

    fetchQuestions();
  }, []);

  return (
    <>
      <PageTemplate>
        <CardWrapper questions={questions} />
      </PageTemplate>
    </>
  );
}