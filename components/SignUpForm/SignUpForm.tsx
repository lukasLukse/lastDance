import { login } from "@/apiCalls/user";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.css";
import cookie from "js-cookie";
import Button from "../Button/Button";

const SignUpForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowError, setShowError] = useState(false);
  const [isButtonLoading, setButtonLoading] = useState(false);

  const loginUser = async () => {
    try {
      setButtonLoading(true);

      const response = await login({ email, password });

      if (response.status === 200) {
        cookie.set(process.env.JWT_KEY as string, response.data.token);
        cookie.set("userId", response.data.userId);
        router.push("/");
      }

      console.log(response);

      setButtonLoading(false);
    } catch (err) {
      console.log("err", err);
      setShowError(true);
      setButtonLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="Email"
        type="text"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        placeholder="Password"
        type="password"
      />

      {isShowError && <h5 className={styles.error}>Bad email or password</h5>}

      <Button onClick={loginUser} title="Login" isLoading={isButtonLoading} />
    </div>
  );
};

export default SignUpForm;
