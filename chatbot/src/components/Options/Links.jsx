import React from "react";


const LinkList = (props) => {

  const linkMarkup = props.options.map((link) => (
    <li key={link.id}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.text}
      </a>
    </li>
  ));


  const question = [
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
    <h3>{linkMarkup}</h3> 
    <p>{optionsList}</p>
    </div>
  );
};

export default LinkList;