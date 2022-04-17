import React from "react";
import "../Quiz/Quiz.css";
function Options(props) {
  const firstQuestion = [
    {
      text: "I'm doing well",
      handler: props.actionProvider.handleGood,
      id: 1
    },
    {
      text: "Not that Good",
      handler: props.actionProvider.handleBad,
      id: 2
    }
  ];
  
  const optionsList = firstQuestion.map((option) => (
    <button key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));
  return (
    <div>
      <p>{optionsList}</p>
    </div>
  );
}
export default Options;
