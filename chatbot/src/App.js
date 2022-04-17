import SideBar from "../src/components/sidebar"
import styles from "../src/css/globals.module.css"
import TopBar from "./components/topbar";
import Body from "./components/body"

const App = () => (
    <div className={styles.page}>
        <SideBar />
        <div className={styles.content}>
          <TopBar/>
          <Body />
        </div>
    </div>
);

export default App;