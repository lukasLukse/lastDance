import SignUpForm from "@/components/SignUpForm/SignUpForm";
import styles from "./styles.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

const SingupPage = () => {
  return (
    <PageTemplate>
      <div className={styles.main}>
        <SignUpForm />
      </div>
    </PageTemplate>
  );
};

export default SingupPage;