import React from "react";
import "../Quiz/Quiz.css";
function Options2Sad(props) {
    const secondQuestion = [
        {
          text: "I'm ok, just going through a little bit of stress",
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
export default Options2Sad;





