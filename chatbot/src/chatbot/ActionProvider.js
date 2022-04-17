// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    handleGood = () => {
      const message = this.createChatBotMessage(
        "That's great to hear! What best describes how you are feeling?"
        ,
        {
          widget: "options2"
        }
      );
      this.setChatbotMessage(message);
    };
    handleBad = () => {
      const message = this.createChatBotMessage(
        "I'm sorry to hear that. What best describes how you are feeling?"
        ,
        {
          widget: "options2sad"
        }
        
      );
      this.setChatbotMessage(message);
    };
    handleScale = () => {
        const message = this.createChatBotMessage(
          "What would you rate your day today from 1 through 5?"
          ,
          {
            widget: "optionsScale"
          }
          
        );
        this.setChatbotMessage(message);
      };
      handle3= () => {
        const message = this.createChatBotMessage(
          "That's ok. Is there anything I can do for you?"
          ,
          {
            widget: "optionsFeelingGreat"
          }
          
        );
        this.setChatbotMessage(message);
      };
    handleGreat= () => {
        const message = this.createChatBotMessage(
          "That's awesome! Is there anything I can do for you?"
          ,
          {
            widget: "optionsFeelingGreat"
          }
          
        );
        this.setChatbotMessage(message);
      };
      handleFeelingLow= () => {
        const message = this.createChatBotMessage(
          "Would you like any mental health resources or anyone to speak to?"
          ,
          {
            widget: "optionsFeelingLow"
          }
          
        );
        this.setChatbotMessage(message);
      };
      handleFirstLink= () => {
          <a href="https://shcs.ucdavis.edu/services/counseling-services"> </a>
        
      
      };
      handleResources= () => {
        const message = this.createChatBotMessage(
          "Here are some links. If you want to still speak to someone, let me know"
          ,
          {
            widget: "links"
          }
          
          
        );
        this.setChatbotMessage(message);
      };
      handleNothing= () => {
        const message = this.createChatBotMessage(
          "Alright! Thanks for chatting with me. Hope you have a great rest of your day!"
          ,
          
        );
        this.setChatbotMessage(message);
      };
      handleNothingWhenSad= () => {
        const message = this.createChatBotMessage(
          "Alright! Thanks for chatting with me. Hope you get better soon! If you want to talk, I'm always here."
          ,
          
        );
        this.setChatbotMessage(message);
      };
      
      
      
    
   
    handleContinue = () => {
      const message = this.createChatBotMessage(
        "Which quiz you want to try again?",
        {
          widget: "options"
        }
      );
      this.setChatbotMessage(message);
    };
    handleUnknown = () => {
      const message = this.createChatBotMessage(
        "Please type continue to try again"
      );
      this.setChatbotMessage(message);
    };
    handleGreeting = () => {
      const message = this.createChatBotMessage(
        "Thanks for trying QuizBot! We hope you had a great learning experience"
      );
      this.setChatbotMessage(message);
    };
    messageHandler = () => {
      const message = this.createChatBotMessage(
        "Hello,what do you want to learn",
        {
          widget: "options"
        }
      );
      this.setChatbotMessage(message);
    };
    setChatbotMessage = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages]
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages]
        }));
      }
    };
  }
  export default ActionProvider;
  