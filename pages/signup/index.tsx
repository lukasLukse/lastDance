import Header from "../../components/Header/Header";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import React from "react";

const SingupPage = () => {
  return (
    <div>
      <Header isUserLoggedIn={false} />
      <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
        Login to Inventory App
      </h1>
      <SignUpForm />
    </div>
  );
};

export default SingupPage;
