import React from "react";
import styles from "../css/body.module.css"
import {Card} from "react-bootstrap"
import CardImage from "../assets/cardImage.png"

import { useNavigate } from "react-router-dom";


let CardTemp = (props) => {
    return (
        <Card className={styles.card}>
                <Card.Title className={styles.title}>{props.title}</Card.Title>
                <Card.Subtitle className={styles.sub}>{props.sub}</Card.Subtitle>
                <Card.Text className={styles.text}>{props.text}</Card.Text>
        </Card>

    )
}

let Body = () => {
    let navigate = useNavigate();
    const goToSignUp = () => {
        navigate("/signup");
    }

    return (
    <div className={styles.container}>
        <div className={styles.welcomeCard}>
            <Card className={styles.welcomeCard}>
                <Card.Title className={styles.welcomeTitle}>Welcome</Card.Title>
                <Card.Subtitle className={styles.welcomeSub} >We're here to help</Card.Subtitle>
                <Card.Text className={styles.welcomeText} onClick={goToSignUp}>
                Get Started
                </Card.Text>
            </Card>
        </div>
        <h2 className={styles.services}>Services</h2> 
        <div className={styles.serviceCardsCont}>
            <div className={styles.serviceCards1}>
                <CardTemp title="Chat Now" sub="Chat with our real-time bot now for assistance"/>
                <CardTemp title="Your Insights" sub="See your progress over time through personalized graphs"/>
            </div>
        </div>
        <div className={styles.serviceCardsCont}>
            <div className={styles.serviceCards1}>
                <CardTemp title="Schedule an Appointment" sub="Schedule an appointment with a trained professional"/>
                <CardTemp title="Resources" sub="Find resources to help out"/>
            </div>
        </div>
        
    </div>
    )
}

export default Body;