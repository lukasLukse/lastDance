import styles from "./styles.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { validateUse as validateUserApp } from "../../apiCalls/user";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const router = useRouter();

  const validateUser = async () => {
    try {
      const response = await validateUserApp();
      if (response.status !== 200) {
        router.push("/signup");
      }

      setUserLoggedIn(true);
    } catch (err) {
      console.log(err);
      router.push("/signup");
    }
  };

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <div className={styles.main}>{children}</div>
      <Footer copyrightTitle="&#169; LUKŠĖS, LTU, Inc: All rights reserved." />
    </div>
  );
};

export default PageTemplate;
