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
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { Navigate } from "react-router-dom";


function App() {
	const user = localStorage.getItem("token");

	return (
        <Router>
		<Routes>
			{user && <Route path="/" exact element={<Dashboard />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
            <Route path="/graphs" exact element={<Graphs />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
        </Router>
	);
}

export default App;