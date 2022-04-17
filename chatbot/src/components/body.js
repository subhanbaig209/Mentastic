import React from "react";
import styles from "../css/body.module.css"
import {Card} from "react-bootstrap"


let Body = () => {
    return (
    <div className={styles.container}>
        <div className={styles.welcomeCard}>
            <Card className={styles.welcomeCard}>
                <Card.Title className={styles.welcomeTitle}>Welcome</Card.Title>
                <Card.Subtitle className={styles.welcomeSub}>We're here to help</Card.Subtitle>
                <Card.Text className={styles.welcomeText}>
                Get Started
                </Card.Text>
            </Card>
        </div>
    </div>
    )
}

export default Body;