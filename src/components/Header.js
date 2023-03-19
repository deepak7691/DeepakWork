import React, { useState } from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { qa } from "./questionData";
import QuestionAnswerList from "./QuestionAnswerList";


function Header() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredQA = qa.filter((q) => {
    return  q.question.includes(search) 
    
   } );

  function handleAddQ() {
    navigate("/addQuestion");
  }
  function hendleAnsQ() {
    navigate("/addAnswer");
  }
  function hendleLogout() {
    navigate("/");
  }

  return (
    <>
      <div className="header_container">
        <h1 className="logo">Quora</h1>
        <div className="header_search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            className="search-input"
          />

          <QuestionAnswerList data={filteredQA} />
          
        </div>
        <div className="header_btn">
          <button onClick={handleAddQ}>Add Question</button>
          <button onClick={hendleAnsQ}>Answer Question</button>
          <button onClick={hendleLogout}>Log out</button>
        </div>
      </div>
    </>
  );
}

export default Header;