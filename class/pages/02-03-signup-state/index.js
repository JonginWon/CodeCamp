import { useState } from "react";

const SignupStatePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSignup = () => {
    console.log(email);
    console.log(password);

    if (email.includes("@") === false) {
      setError("이메일 올바르지 않음.");
    } else {
      alert("회원가입 축하");
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div>{error}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
};

export default SignupStatePage;
