import SideBar from "../components/sidebar"
import {react, useState} from "react";
import styles from "../../src/css/globals.module.css"
import TopBar from "../components/topbar";
import Body from "../components/body"
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";
import ActionProvider from "../chatbot/ActionProvider";
import "../css/styles.css"

let Dashboard = () => {
    const [showBot, setBot] = useState(true);

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  function handleBot() {
    const botState = !showBot;
    setBot(botState);
  }

    return (
        <div className={styles.page}>
        <SideBar handleBot={handleBot}/>
        <div className={styles.content}>
            <TopBar handleLogout = {handleLogout}/>
            <Body/>
        </div>
        {showBot && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
    </div>
    );
    
}

export default Dashboard;