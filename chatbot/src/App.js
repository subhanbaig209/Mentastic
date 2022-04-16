import Chart from "./components/chart"
import SideBar from "../src/components/sidebar"
import styles from "../src/css/globals.module.css"

const App = () => (
    <div className={styles.page}>
        <SideBar />
        <div>
          <Chart />
        </div>
    </div>
);

export default App;