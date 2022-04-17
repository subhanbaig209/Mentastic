import React from "react";
import "../Quiz/Quiz.css";
function OptionsFeelingGreat(props) {
    const question = [
        {
          text: "Nothing. Thanks for asking!",
          handler: props.actionProvider.handleNothing,
          id: 1
        },
        {
          text: "I guess I feel a bit lonely",
          handler: props.actionProvider.handleFeelingLow,
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
export default OptionsFeelingGreat;





