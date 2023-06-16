import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, settitle] = useState("");
  const [detail, setdetail] = useState("");
  const [card, setcard] = useState([]);

  // 제목 필드가 변경될 경우
  const ontitleChangeHandler = (event) => {
    settitle(event.target.value);
  };
  //내용 필드가 변경될 경우
  const ondetailChangeHandler = (event) => {
    setdetail(event.target.value);
  };

  //추가하기 버튼 누르면
  const AddbuttonHandler = () => {
    const newcard = {
      id: card.length + 1,
      title,
      detail: detail,
    };
    setcard([...card, newcard]);
  };

  //삭제하기 버튼 누르면
  const RemovebuttonHandler = (id) => {
    const newcard = card.filter((card) => card.id !== id);
    setcard(newcard);
  };

  //완료하기 버튼 누르면
  const FinishbuttonHandler = (id) => {
    const newcard = card.filter((card) => card.id === id);
    setcard(newcard);
  };

  return (
    <div>
      <div>My Todo List</div>
      <form className="입력창">
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={ontitleChangeHandler}
        />
        <label>내용</label>
        <input
          type="text"
          name="detail"
          value={detail}
          onChange={ondetailChangeHandler}
        />
        <button onClick={AddbuttonHandler}>추가하기</button>
      </form>
      <div>working...</div>
      <div class="component-style">
        <label>리액트 공부하기</label> <br />
        <label>리액트 기초를 공부해봅시다</label>
        {title} <br />
        {detail}
        <button onclick={RemovebuttonHandler}>삭제하기</button>
        <button onclick={FinishbuttonHandler}>완료</button>
      </div>
      <div>Done..!</div>
    </div>
  );
};

export default App;
