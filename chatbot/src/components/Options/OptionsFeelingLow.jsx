import React from "react";
import "../Quiz/Quiz.css";
function OptionsFeelingLow(props) {
    const question = [
        {
          text: "Resources",
          handler: props.actionProvider.handleResources,
          id: 1
        },
        {
          text: "I want to speak to somebody",
          handler: props.actionProvider.handleFeelingLow,
          id: 2
        },
        {
            text: "Nope, I'm good.",
            handler: props.actionProvider.handleNothingWhenSad,
            id: 2
          }
      ];
      
  
  const optionsList = question.map((option) => (
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
export default OptionsFeelingLow;





