// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "../components/BotAvatar/BotAvatar";
import Options from "../components/Options/Options";
import Options2 from "../components/Options/Options2";
import Quiz from "../components/Quiz/Quiz";
import UserAvatar from "../components/UserAvatar/UserAvatar";
import OptionsFeelingLow from "../components/Options/OptionsFeelingLow";
import OptionsFeelingGreat from "../components/Options/OptionsFeelingGreat";
import OptionsScale from "../components/Options/OptionsScale";
import Options2Sad from "../components/Options/Options2Sad";
import OptionsSpeakOrEnd from "../components/Options/OptionsSpeakOrEnd";
import OptionsResources from "../components/Options/OptionsResources";
import LinkList from "../components/Options/Links";

const config = {
  botName: "QuizBot",
  initialMessages: [
    createChatBotMessage(`Hi! How has your day been?`, {
      withAvatar: false,
      delay: 100,
      widget: "options"
    })
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "white"
    }
  },
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "white",
          padding: "5px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          display: "flex",
          fontSize: "0.85rem",
          paddingTop: "12.5px",
          paddingBottom: "12.5px",
          paddingRight: "12.5px",
          paddingLeft: "12.5px",
          fontWeight: "700",
          alignItems: "center"
    
        }}
      >
   </div>
    ),
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />
  },

  state: {
    linux: [],
    sql: [],
    docker: []
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />
    },
    {
        widgetName: "options2",
        widgetFunc: (props) => <Options2 {...props} />
      },
      {
        widgetName: "options2sad",
        widgetFunc: (props) => <Options2Sad {...props} />
      },
      {
        widgetName: "optionsFeelingLow",
        widgetFunc: (props) => <OptionsFeelingLow {...props} />
      },
      {
        widgetName: "optionsFeelingGreat",
        widgetFunc: (props) => <OptionsFeelingGreat {...props} />
      },
      {
        widgetName: "optionsScale",
        widgetFunc: (props) => <OptionsScale {...props} />
      },
      {
        widgetName: "speakOrEnd",
        widgetFunc: (props) => <OptionsSpeakOrEnd {...props} />
        },
        {
            widgetName: "links",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                  {
                    text: "UC Davis Counseling",
                    url:
                      "https://shcs.ucdavis.edu/services/counseling-services",
                    id: 1,
                  },
                  {
                    text: "Mental Health America",
                    url:
                      "http://www.mentalhealthamerica.net/",
                    id: 2,
                  },
                  {
                    text: "Freedom From Fear",
                    url: "https://www.mentalhealthfirstaid.org/mental-health-resources/#:~:text=Freedom%20From%20Fear%prop",
                    id: 3,
                  },
                ],
              },
          },
      
    {
      widgetName: "good",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        course: "Good"
      }
    },
   
    {
      widgetName: "bad",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        course: "Bad"
      }
    }
  ]
};

export default config;