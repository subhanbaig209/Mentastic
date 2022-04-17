import React from "react";
import "../Quiz/Quiz.css";
function OptionsScale(props) {
    const secondQuestion = [
        {
          text: "1",
          handler: props.actionProvider.handleFeelingLow,
          id: 1
        },
        {
            text: "2",
            handler: props.actionProvider.handleFeelingLow,
          id: 2
        },
        {
            text: "3",
            handler: props.actionProvider.handle3,
          id: 2
        }
        ,
        {
            text: "4",
            handler: props.actionProvider.handleGreat,
          id: 2
        },
        {
            text: "5",
            handler: props.actionProvider.handleGreat,
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
export default OptionsScale;





