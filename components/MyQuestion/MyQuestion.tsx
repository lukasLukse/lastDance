import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import cookie from "js-cookie";
import { deleteMyQuestion } from "../../apiCalls/questions";

type MyQuestionProps = {
  id: string;
  userId: string;
  name: string;
  date: string;
  question: string;
};

const MyQuestion = ({ id, name, date, question }: MyQuestionProps) => {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const userId = cookie.get("userId");

  const deleteQuestion = async () => {
    // if (userId !== userId) {
    //   console.log(userId);
    //   return;
    // }
    try {
      setIsDeleting(true);
      const response = await deleteMyQuestion({ id });

      if (response.status === 200) {
        router.push("/");
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
        <label>Time:</label>
        <h4>{date}</h4>
        <label>Question:</label>
        <h2>{question}</h2>
        <label>Posted by :</label>
        <h3>{name}</h3>
        <Button
          title="Delete Question"
          onClick={() => setModalVisible(true)}
          isLoading={isDeleting}
        />
      </div>
      <Modal
        isVisible={isModalVisible}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        title="Confirm Deletion"
        content="Are you sure you want to delete this question?"
      />
    </div>
  );
};

export default MyQuestion;
