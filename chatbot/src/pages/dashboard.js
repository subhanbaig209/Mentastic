import SideBar from "../components/sidebar"
import styles from "../../src/css/globals.module.css"
import TopBar from "../components/topbar";
import Body from "../components/body"
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";
import ActionProvider from "../chatbot/ActionProvider";
import "../css/styles.css"

let Dashboard = () => {
    return (
        <div className={styles.page}>
        <SideBar />
        <div className={styles.content}>
            <TopBar/>
            <Body />
        </div>
        <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />
    </div>
    );
    
}

export default Dashboard;