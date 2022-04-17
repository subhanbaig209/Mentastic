import React from "react";
import "../Quiz/Quiz.css";
function Options2(props) {
    const secondQuestion = [
        {
          text: "I'm feeling great! Thanks for asking!",
          handler: props.actionProvider.handleScale,
          id: 1
        },
        {
          text: "I'm feeling really low right now.",
          handler: props.actionProvider.handleScale,
          id: 2
        }
      ];
      
  
  const optionsList = secondQuestion.map((option) => (
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
export default Options2;





