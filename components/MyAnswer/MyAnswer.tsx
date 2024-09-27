import Button from "../Button/Button";
import styles from "./styles.module.css";
import { deleteAnswer } from "../../apiCalls/questions";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useRouter } from "next/router";

type MyAnswerProps = {
  id: string;
  date: string;
  name: string;
  answerText: string;
};

const MyAnswer = ({ id, date, name, answerText }: MyAnswerProps) => {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteQuestion = async () => {
    try {
      setIsDeleting(true);
      const response = await deleteAnswer({ id });

      if (response.status === 200) {
        router.push("/questions");
      } else {
        console.error("Failed to delete the question");
      }
    } catch (err) {
      console.error("Error deleting the question:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleConfirmDelete = () => {
    deleteQuestion();
    setModalVisible(false);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };
  return (
    <div className={styles.main}>
      <div className={styles.itemInfo}>
        <label>Date:</label>
        <h4>{date}</h4>
        <label>Answer:</label>
        <h2>{answerText}</h2>
        <label>Posted by:</label>
        <h3>{name}</h3>
        <Button
          title="Delete Question"
          onClick={() => setModalVisible(true)}
          isLoading={isDeleting}
        />
      </div>
      <div>
        <Modal
          isVisible={isModalVisible}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          title="Confirm Deletion"
          content="Are you sure you want to delete this question?"
        />
      </div>
    </div>
  );
};

export default MyAnswer;
