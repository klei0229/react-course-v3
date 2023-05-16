import data from "./data";
import Question from "./Question";
import { useState, useEffect } from "react";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const openQuestion = (id) => {
    if (id == selectedQuestion) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return (
            <Question
              selectedQuestion={selectedQuestion}
              key={question.id}
              question={question}
              openQuestion={openQuestion}
            ></Question>
          );
        })}
      </div>
    </main>
  );
};
export default App;
