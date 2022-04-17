import SideBar from "../src/components/sidebar"
import styles from "../src/css/globals.module.css"
import TopBar from "./components/topbar";
import Body from "./components/body"
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import "./css/styles.css"
import Graphs from "./pages/graphs";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => (

    <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/graphs" element={<Graphs />} />
        </Routes>
    </Router>
);

export default App;