import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import cookie from "js-cookie";
import CardWrapper from "../components/CardWrapper/CardWrapper";
import { Question } from "@/types/questions";
import { useRouter } from "next/router";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import CreateQuestionForm from "@/components/CreateQuestionForm/CreateQuestionForm";

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
      console.log(response.data.questions);
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
        <div className={styles.main}>
          <CreateQuestionForm />
          <CardWrapper questions={questions} answers={[]} />
        </div>
      </PageTemplate>
    </>
  );
}

// - Registruotis V
// - Prisijungti V
// - Užduoti naują klausimą (tik prisijungus) V
// - Ištrinti klausimą (tik prisiijungus) V
// - Atsakyti į užduotą klausimą (tik prisijungus) // EXTRA V
// - Ištrinti atsakymą (tik prisijungus) // EXTRA V
// - Žymėti/atžymėti patinkačius ir nepatinkančius atsakymus (like/dislike) (tik prisijungus)
// - Peržiūrėti klausimų sąrašą. V
// - Filtruoti į atsakytus arba neatsakytus klausimus // EXTRA V
// - Peržiūrėti klausimų atsakymus V
