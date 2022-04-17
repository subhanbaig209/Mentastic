import React, { useEffect } from "react";
import styles from "../css/graphs.module.css"
import {Card} from "react-bootstrap"
import SideBar from "../components/sidebar"
import globalStyles from "../../src/css/globals.module.css"
import TopBar from "../components/topbar";
import { Doughnut, Chart } from "react-chartjs-2"
import "chart.js/auto";
import {useState} from "react"

let Body = () => {
  let [stress, setStress] = useState(0);
  let [mood, setMood] = useState(0);
  let [hasSubmit, setHasSubmit] = useState(false);
  let [sunStress, setSunStress] = useState(10);
  let [currentMood, setCurrentMood] = useState(.25)

  let submitted = () => {
    setHasSubmit(true);
  }

  let moodLevel = (event) => {
    setMood(.01);
  }

  let stressLevel = (event) => {
    setStress(parseInt(event.target.value));
  }

  useEffect(() => {

        setSunStress(sunStress + stress);
        setCurrentMood(currentMood + mood);
  }, [hasSubmit])

  let data = {
    labels: ["Low", "OK", "Good"],
    datasets: [{
      data: [.25 - mood, .75, currentMood],
      backgroundColor: [
        "#C4D34C",
        "#F7464A",
        "#A23453"
      ],
      labels: [
        "Good",
        'OK',
        'Low'
      ],
    }],
  };

  let chartData = {
    labels: ["M", "T", "W", "Th", "F", "Sat", "Sun"],
    datasets: [{
      data: [50, 20, 30, 40, 31, 5, sunStress],
      backgroundColor: [
        "#C4D34C",
        "#F7464A",
        "#A23453"
      ]
    }]
  }

    return (
    <div className={styles.container}>
        <div className={styles.welcomeCard}>
            <Card className={styles.welcomeCard}>
                <Card.Title className={styles.welcomeTitle}>Personalized Recommendations</Card.Title>
                <Card.Subtitle className={styles.welcomeSub} >Get your insights</Card.Subtitle>
                <Card.Text className={styles.welcomeText}>
                Keep track of how you feel so you can be in the best shape possible
                </Card.Text>
            </Card>
        </div>

        <div className={styles.mood}>
          <div>
            <Doughnut data={data} />
          </div>
          <div className={styles.moodInfo}>
            <h3>Track your overall mood</h3>
            <p className={styles.moodDescr}>See how your mood has changed over a certain period of time. Monitoring how you feel over long periods of time is 
            crucial to understanding whether or not you need to talk to someone. Don't wait to reach out if you feel frustrated helpless in a situation. </p>
          </div>
        </div>

        <div className={styles.stress}>
          <div className={styles.stressInfo}>
            <h3>Stress levels play a crucial role</h3>
            <p className={styles.moodDescr}>Stress has been linked to an increase for heart disease, high blood pressure, and anxiety attacks. Maintaining a proper level
            of exercise and socialization is the start to ensuring that you stay healthy and happy. Identifying these trends throughout the week is important to allow 
            you to plan and take necessary steps to reduce stressors.</p>
          </div>
          <div className={styles.chart}>
            <Chart type="bar" data={chartData} />
          </div>
        </div>

        <hr className={styles.divider}/>

        <div className={styles.survey}> 
          <div className={styles.surveyInfo}>
            <h3>Take the survey now</h3>
            <p className={styles.moodDescr}>Don't wait - take the survey now to update your profile with the latest insights into your health. We'll update them immediatly and save
            them so that you can gain a better of understanding of your daily health.</p>
          </div>
          <div className={styles.form}>
          <p className={styles.moodDescr}>How would you describe you overall mood?</p>
            <select onChange={moodLevel}>
              <option value="1">Low</option>
              <option value="1">Medium</option>
              <option value="1">High</option>
            </select>

            <p className={styles.moodDescr}>How Stressed would you say you are today?</p>
            <select onChange={stressLevel}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            <button className={styles.submit} onClick={submitted}>Submit</button>
          </div>
          
        </div>
    </div>
    )
}


let Graphs = () => {
  return (
    <div className={globalStyles.page}>
      <SideBar />
    <div className={globalStyles.content}>
        <TopBar/>
        <Body />
    </div>
</div>  
  )
}

export default Graphs;