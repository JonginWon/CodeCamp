import axios from "axios";
import { useState } from "react";

const RestGetPage = () => {
  const [title, setTitle] = useState("");
  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    setTitle(result.data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>비동기 REST-API 요청하기</button>
      <button onClick={onClickSync}>동기 REST-API 요청하기</button>
      <h1>{title}</h1>
    </>
  );
};

export default RestGetPage;
