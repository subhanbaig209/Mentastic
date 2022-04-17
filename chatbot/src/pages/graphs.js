import React from 'react'
import SideBar from "../components/sidebar"
import styles from "../../src/css/globals.module.css"
import TopBar from "../components/topbar";
import { Chart } from "react-chartjs-2"

const Graphs = () => {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  return (
    <div className={styles.page}>
        <SideBar />
        <div className={styles.content}>
            <TopBar/>
            <Chart type="line" options={} data={data}/>
        </div>
    </div>
  )
}

export default Graphs