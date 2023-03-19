import React from "react";
import "../styles/qaList.css";
import users from "./LoginData";
import { qa } from "./questionData";



function QuestionAnswerList() {
  return (
    <div className="quorabox">
      {qa.map((q) => (
        <div key={q.id} className="quorabox_info">
          <div className="post-top-left">
            <img
              className="post-profile-image"
              src={users.filter((u) => u.id === q.id)[0].src}
              alt=""
            />
            <span className="post-user-name">
              {users.filter((u) => u.id === q.id)[0].username}
            </span>
          </div>
          <hr className="share-hr" />
          <div className="share-box">
            <div className="share-options">
              <h2>{q.question}</h2>
              <p>{q.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionAnswerList;