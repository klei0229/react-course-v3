import React, { useState } from "react";

const Question = (props) => {
  const { id, title, info } = props.question;
  const [isShowInfo, setShowInfo] = useState(false);


  const selectedQuestion = props.selectedQuestion;
  const openQuestion = props.openQuestion
  
  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            openQuestion(id);
          }}
        >
          {selectedQuestion==id ? "-" : "+"}
        </button>
      </header>
      {selectedQuestion==id ? <p>{info}</p> : <></>}
    </div>
  );
};

export default Question;
