import SideBar from "../src/components/sidebar"
import styles from "../src/css/globals.module.css"
import TopBar from "./components/topbar";
import Body from "./components/body"
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import "./css/styles.css"
import Dashboard from "./pages/dasboard";

const App = () => (
    <Dashboard />
);

export default App;