import React from "react";
import ButtonSubmit from "../components/ButtonSubmit";

function Login() {
  const name = "로그인"
  return (
    <div>
      <ButtonSubmit buttonName={name}></ButtonSubmit>
    </div>
  );
}

export default Login;
