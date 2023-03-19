import React, { useState } from "react";
import "../styles/addAns.css";
import { useNavigate } from "react-router-dom";
import { qa } from "./questionData";

function AddAnswer() {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  
  const navigate = useNavigate();

  const handleAddAnswer = (event) => {
    event.preventDefault();

    const question = qa.find((q) => q.id === selectedQuestion);
    const newAnswer = {
      id: Date.now(),
      answer: answer,
    };
    question.answers.push(newAnswer);
    setAnswer("");
    navigate("/home");

  
  };

  const handleCancel = () => {
    setAnswer("");
    navigate("/home");
  };

  const handleAddAns=()=>{
    navigate("/home");
  }
  return (
    <div className="add-answer">
      <h2>Add Answer</h2>
      <form onSubmit={handleAddAnswer}>
        <label htmlFor="question">Question:</label>
        <select
          id="question"
          value={selectedQuestion}
          onChange={(event) => setSelectedQuestion(event.target.value)}
        >
          <option value="">Select a question</option>
          {qa.map((q) => (
            <option key={q.id} value={q.id}>
              {q.question}
            </option>
          ))}
        </select>
        <label htmlFor="answer">Answer:</label>
        <textarea
          id="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        ></textarea>
        <div className="button_container">
          <button type="submit" onClick={handleAddAns}>Add Answer</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddAnswer;