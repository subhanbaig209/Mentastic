import React from "react";
import "../Quiz/Quiz.css";
function OptionsResources(props) {
    const question = [
        {
          text: "UC Davis Counseling",
          url: 'https://shcs.ucdavis.edu/services/counseling-services',
          id: 1
        },
        {
          text: "Mental Health America",
          url: 'http://www.mentalhealthamerica.net/',
          id: 2
        },
        {
            text: "Freedom From Fear",
            url: 'https://www.mentalhealthfirstaid.org/mental-health-resources/#:~:text=Freedom%20From%20Fear%prop',
            id: 3
          },
          {
            text: "I want to speak to somebody",
            handler: props.actionProvider.handleFeelingLow,
            id: 4
          },
          {
              text: "Nope, I'm good.",
              handler: props.actionProvider.handleNothingWhenSad,
              id: 5
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
export default OptionsResources;





