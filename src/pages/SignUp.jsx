import React from "react";
import ButtonSubmit from "../components/ButtonSubmit";

function Signup() {
  const name = "회원가입"
  return (
    <div>
      <ButtonSubmit buttonName={name}></ButtonSubmit>
    </div>
  );
}

export default Signup;
